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
  update: async (req, res, next) => {},
  delete: async (req, res, next) => {},
};
module.exports = applicationController;
