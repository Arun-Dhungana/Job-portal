const { ObjectId } = require("mongodb");
const { showError } = require("../../middlewares");
const { Jobs } = require("../../models");

const jobController = {
  create: async (req, res, next) => {
    try {
      const {
        title,
        description,
        timing,
        category,
        experience,
        salary,
        education,
        location,
        position_level,
        date,
        count,
      } = req.body;
      let type = [];
      const opening = new Date();
      
      if (timing.toLowerCase() == "fulltime" && salary >= 100000) {
        type = ["premium", "top"];
      } else if (timing.toLowerCase() == "fulltime" && salary >= 50000) {
        type = ["top"];
      } else {
        console.log(timing, salary);
        type = ["normal"];
      }
      await Jobs.create({
        title,
        description,
        timing,
        category,
        experience,
        salary,
        education,
        location,
        position_level,
        type: type,
        count,
        creator_id: req.params.id,
        opening: opening,
        deadline: new Date(date),
      });
      res.json({ message: "Job Created!!!" });
    } catch (err) {
      showError(err, next);
    }
  },
  show: async (req, res, next) => {
    try {
      const id = new ObjectId(req.params.id);
      const jobs = await Jobs.aggregate([
        { $match: { _id: id, status: true } },
        {
          $lookup: {
            from: "users",
            foreignField: "_id",
            localField: "creator_id",
            as: "creator",
          },
        },
      ]);
      console.log(jobs);
      const job = jobs.map((jobb) => {
        return {
          title: jobb.title,
          description: jobb.description,
          timing: jobb.timing,
          category: jobb.category,
          experience: jobb.experience,
          salary: jobb.salary,
          education: jobb.education,
          location: jobb.location,
          position_level: jobb.position_level,
          type: jobb.type,
          creator: jobb.creator[0],
          opening: jobb.opening,
          deadline: jobb.deadline,
          count: jobb.count,
        };
      });
      res.json(job);
    } catch (err) {
      showError(err, next);
    }
  },
  update: async (req, res, next) => {
    try {
      const {
        title,
        description,
        timing,
        category,
        experience,
        salary,
        education,
        location,
        position_level,
        deadline,
        status,
        count,
      } = req.body;
      await Jobs.findByIdAndUpdate(req.params.id, {
        title,
        description,
        timing,
        category,
        experience,
        salary,
        education,
        location,
        position_level,
        deadline,
        status,
        count,
      });
      res.json({ message: "Successfully updated" });
    } catch (err) {
      showError(err, next);
    }
  },
  delete: async (req, res, next) => {
    try {
      await Jobs.findByIdAndDelete(req.params.id);
      res.json({ message: "Successfully deleted" });
    } catch (err) {
      showError(err, next);
    }
  },
};
module.exports = jobController;
