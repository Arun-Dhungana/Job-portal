const { ObjectId } = require("mongodb");
const { showError } = require("../../middlewares");
const { Application } = require("../../models/index");
const { unlink } = require("node:fs/promises");
const applicationController = {
  create: async (req, res, next) => {
    try {
      const resume = req.file.filename;

      const exist = await Application.find({
        job_id: new ObjectId(req.params.id),
        user_id: new ObjectId(req.uid),
      });
      if (exist.length > 0) {
        await unlink(req.file.filename);
        res.status(400).json({ message: "Already applied!!" });
      } else {
        try {
          await Application.create({
            job_id: req.params.id,
            user_id: req.uid,
            resume: resume,
          });
          res.json({ success: "Successfully Applied" });
        } catch (err) {
          console.log(err);
        }
      }
    } catch (err) {
      showError(err, next);
    }
  },
  update: async (req, res, next) => {
    try {
      const { status } = req.body;
      await Application.findByIdAndUpdate(req.params.id, { status: status });
      res.json({ success: "Update success!!" });
    } catch (err) {
      showError(err, next);
    }
  },
  delete: async (req, res, next) => {
    try {
      const app = await Application.findById(req.params.id);
      await unlink(`uploads/${app.resume}`);
      await Application.findByIdAndDelete(req.params.id);
      res.json({ success: "Deleted successfully" });
    } catch (err) {
      showError(err, next);
    }
  },
};
module.exports = applicationController;
