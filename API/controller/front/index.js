const { showError } = require("../../middlewares");
const { Jobs } = require("../../models/index");
const { ObjectId } = require("mongodb");
const moment = require("moment");
const frontCOntroller = {
  top: async (req, res, next) => {
    try {
      const jobs = await Jobs.aggregate([
        { $match: { type: "top", status: true } },
        {
          $lookup: {
            from: "users",
            localField: "creator_id",
            foreignField: "_id",
            as: "creator",
          },
        },
      ]).exec();
      const job = jobs.map((job) => {
        return {
          job_id: job._id,
          company_id: job.creator_id,
          title: job.title,
          category: job.category,
          opening: moment(job.opening).format("MMMM D,YYYY"),
          deadline: moment(job.deadline).format("MMMM D,YYYY"),
          salary: job.salary,
          name: job.creator[0].name,
          image: job.creator[0].image,
        };
      });

      res.json(job);
    } catch (err) {
      showError(err, next);
    }
  },
  hot: async (req, res, next) => {
    try {
      const jobs = await Jobs.aggregate([
        {
          $match: {
            $expr: {
              $and: [
                {
                  $gte: [
                    "$opening",
                    { $subtract: [new Date(), 30 * 24 * 60 * 60 * 1000] },
                  ],
                },
                { $eq: ["$status", true] },
              ],
            },
          },
        },
        {
          $lookup: {
            from: "users",
            localField: "creator_id",
            foreignField: "_id",
            as: "creator",
          },
        },
      ]).exec();

      const job = jobs.map((job) => {
        return {
          job_id: job._id,
          company_id: job.creator_id,
          title: job.title,
          opening: moment(job.opening).format("MMMM D,YYYY"),
          deadline: moment(job.deadline).format("MMMM D,YYYY"),
          salary: job.salary,
          category: job.category,
          name: job.creator[0].name,
          image: job.creator[0].image,
        };
      });
      res.json(job);
    } catch (err) {
      showError(err, next);
    }
  },
  premium: async (req, res, next) => {
    try {
      const jobs = await Jobs.aggregate([
        { $match: { type: "premium", status: true } },
        {
          $lookup: {
            from: "users",
            localField: "creator_id",
            foreignField: "_id",
            as: "creator",
          },
        },
      ]).exec();
      const job = jobs.map((job) => {
        return {
          job_id: job._id,
          company_id: job.creator_id,
          title: job.title,
          opening: moment(job.opening).format("MMMM D,YYYY"),
          deadline: moment(job.deadline).format("MMMM D,YYYY"),
          salary: job.salary,
          category: job.category,
          name: job.creator[0].name,
          image: job.creator[0].image,
        };
      });
      res.json(job);
    } catch (err) {
      showError(err, next);
    }
  },
  normal: async (req, res, next) => {
    try {
      const jobs = await Jobs.aggregate([
        { $match: { type: "normal", status: true } },
        {
          $lookup: {
            from: "users",
            localField: "creator_id",
            foreignField: "_id",
            as: "creator",
          },
        },
      ]).exec();
      const job = jobs.map((job) => {
        return {
          job_id: job._id,
          company_id: job.creator_id,
          title: job.title,
          opening: moment(job.opening).format("mmmm d,yyyy"),
          deadline: moment(job.deadline).format("mmmm d,yyyy"),
          salary: job.salary,
          category: job.category,
          name: job.creator[0].name,
          image: job.creator[0].image,
        };
      });

      res.json(job);
    } catch (err) {
      showError(err, next);
    }
  },
  search: async (req, res, next) => {
    try {
      const job = await Jobs.aggregate([
        {
          $match: {
            title: { $regex: req.query.title, $options: "i" },
          },
        },
        {
          $lookup: {
            from: "users",
            foreignField: "_id",
            localField: "creator_id",
            as: "creator",
          },
        },
      ]).exec();
      const jobs = job.map((jobb) => {
        return {
          job_id: jobb._id,
          company_id: jobb.creator_id,
          title: jobb.title,
          opening: moment(job.opening).format("MMMM D,YYYY"),
          deadline: moment(job.deadline).format("MMMM D,YYYY"),
          salary: jobb.salary,
          category: jobb.category,
          name: jobb.creator[0].name,
          image: jobb.creator[0].image,
        };
      });
      res.json(jobs);
    } catch (err) {
      showError(err, next);
    }
  },
};
module.exports = frontCOntroller;
