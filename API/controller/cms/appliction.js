const { showError } = require("../../middlewares");
const { Application } = require("../../models/index");
const applicationController = {
  create: async (req, res, next) => {
    try {
      const { user_id } = req.body;
      await Application.create({ job_id: req.params.id, user_id });
      res.json({ message: "Successfully Applied" });
    } catch (err) {
      showError(err, next);
    }
  },
  update: async (req, res, next) => {
    try {
      const { status } = req.body;
      await Application.findByIdAndUpdate(req.params.id, { status: status });
      res.json({ message: "Update success!!" });
    } catch (err) {
      showError(err, next);
    }
  },
  delete: async (req, res, next) => {
    try {
      await Application.findByIdAndDelete(req.params.id);
      res.json({ message: "deleted Successfully" });
    } catch (err) {
      showError(err, next);
    }
  },
};
module.exports = applicationController;
