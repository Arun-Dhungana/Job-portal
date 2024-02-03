const { showError } = require("../../middlewares");
const { Application } = require("../../models/index");
const applicationController = {
  create: async (req, res, next) => {
    try {
      const resume = req.file.filename;
      const exist = Application.find({
        job_id: req.params.id,
        user_id: req.uid,
      });
      if (exist) {
        res.status(400).json({ message: "Already applied!!" });
      }
      await Application.create({
        job_id: req.params.id,
        user_id: req.uid,
        resume: resume,
      });
      res.json({ success: "Successfully Applied" });
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
      await Application.findByIdAndDelete(req.params.id);
      res.json({ success: "deleted Successfully" });
    } catch (err) {
      showError(err, next);
    }
  },
};
module.exports = applicationController;
