const { ObjectId } = require("mongodb");
const { showError } = require("../../middlewares");
const { Users, Application, Jobs } = require("../../models/index");
const bcrypt = require("bcryptjs");
const ProfileController = {
  detail: async (req, res, next) => {
    try {
      const user = await Users.findById(req.params.id);
      res.json(user);
    } catch (err) {
      showError(err, next);
    }
  },
  change_password: async (req, res, next) => {
    try {
      const { old_password, new_passsword, confirm_password } = req.body;

      if (bcrypt.compareSync(old_password, req.user.password)) {
        if (new_passsword === confirm_password) {
          const hash = bcrypt.hashSync(new_passsword, bcrypt.genSaltSync(10));
          await Users.findByIdAndUpdate(req.uid, { password: hash });
          res.json({ message: "Successfully updated" });
        } else {
          next({ message: "Worng confirmation password" });
        }
      } else {
        next({ message: "Wrong old password!!" });
      }
    } catch (err) {
      showError(err, next);
    }
  },
  update: async (req, res, next) => {
    try {
      const { number, name } = req.body;
      await Users.findByIdAndUpdate(req.uid, { name, number });
      res.json({ message: "Successfully updated!!" });
    } catch (err) {
      showError(err, next);
    }
  },
  delete: async (req, res, next) => {
    try {
      await Users.findByIdAndDelete(req.uid);
      res.json({ message: "Deleted" });
    } catch (err) {
      showError(err, next);
    }
  },
  applied_jobs: async (req, res, next) => {
    try {
      const id = new ObjectId(req.params.id);
      const appli = await Application.aggregate([
        { $match: { user_id: id } },
        {
          $lookup: {
            from: "jobs",
            foreignField: "_id",
            localField: "job_id",
            as: "job",
          },
        },
      ]);
      const apply = appli.map((app) => {
        return {
          status: app.status,
          title: app.job[0].title,
        };
      });
      res.json(apply);
    } catch (err) {
      showError(err, next);
    }
  },
  jobs: async (req, res, next) => {
    try {
      const id = new ObjectId(req.uid);
      const job = await Jobs.find({ creator_id: id });
      const jobs = job.map((job) => {
        return { title: job.title };
      });
      res.json(jobs);
    } catch (err) {
      showError(err, next);
    }
  },
  applicants: async (req, res, next) => {
    try {
      const id = new ObjectId(req.params.id);
      const application = await Application.aggregate([
        { $match: { job_id: id } },
        { $addFields: { count: { $count: { $sum: 1 } } } },
        {
          $lookup: {
            from: "users",
            foreignField: "_id",
            localField: "user_id",
            as: "user",
          },
        },
      ]);
      const applications = application.map((app) => {
        return {
          count: app.count,
          status: app.status,
          user: app.user[0],
        };
      });
      req.json(applications);
    } catch (err) {
      showError(err, next);
    }
  },
};
module.exports = ProfileController;
