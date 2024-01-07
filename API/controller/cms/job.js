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
      } = req.body;
      let type = [];

      if (timing.toLowerCase() == "fulltime" && salary >= 100000) {
        type = ["premium", "top"];
      } else if (timing == "fulltime" && salary >= 50000) {
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
        creator_id: req.params.id,
        deadline: new Date(date),
      });
      res.json({ message: "Job Created!!!" });
    } catch (err) {
      showError(err, next);
    }
  },
  show: async (req, res, next) => {},
  update: async (req, res, next) => {},
  delete: async (req, res, next) => {},
};
module.exports = jobController;
