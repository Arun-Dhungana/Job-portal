const { ObjectId } = require("mongodb");
const { showError } = require("../../middlewares");
const { Users, Application, Jobs } = require("../../models/index");
const bcrypt = require("bcryptjs");
const { unlink } = require("node:fs/promises");
const ProfileController = {
  detail: async (req, res, next) => {
    console.log(1);
    try {
      const user = await Users.findById(req.uid);
      res.json(user);
    } catch (err) {
      showError(err, next);
    }
  },
  change_password: async (req, res, next) => {
    try {
      const { old_password, new_password, confirm_password } = req.body;

      if (bcrypt.compareSync(old_password, req.user.password)) {
        if (new_password === confirm_password) {
          const hash = bcrypt.hashSync(new_password, bcrypt.genSaltSync(10));

          await Users.findByIdAndUpdate(req.user._id, { password: hash });
          res.json({ success: "Successfully updated" });
        } else {
          res.status(422).json({ message: "Wrong confirmation password" });
        }
      } else {
        res.status(422).json({ message: "Wrong old password" });
      }
    } catch (err) {
      showError(err, next);
    }
  },
  update: async (req, res, next) => {
    try {
      const { number, name, description, image } = req.body;
      const user = await Users.findById(req.params.id);
      console.log(user);
      if (image) {
        await Users.findByIdAndUpdate(req.params.id, {
          name,
          number,
          description,
          image,
        });
        res.status(200).json({ success: "Successfully updated!!" });
      } else if (req.file) {
        console.log(4);
        const img = req.file.filename;
        await unlink(`uploads/${user.image}`);
        await Users.findByIdAndUpdate(req.params.id, {
          name,
          number,
          description,
          image: img,
        });
        res.status(200).json({ success: "Successfully updated!!" });
      }
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
          id: app._id,
          status: app.status,
          title: app.job[0].title,
          category: app.job[0].category,
          description: app.job[0].description,
        };
      });
      console.log(apply);
      res.json(apply);
    } catch (err) {
      showError(err, next);
    }
  },
  jobs: async (req, res, next) => {
    try {
      const id = new ObjectId(req.uid);
      const job = await Jobs.find({ creator_id: id, status: true });
      const jobs = job.map((job) => {
        return {
          title: job.title,
          category: job.category,
          description: job.description,
          job_id: job._id,
        };
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
        { $match: { job_id: id, status: "pending" } },

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
          status: app.status,
          resume: app.resume,
          name: app.user[0].name,
          email: app.user[0].email,
          id: app._id,
        };
      });
      console.log(applications);
      res.json(applications);
    } catch (err) {
      showError(err, next);
    }
  },
};
module.exports = ProfileController;
