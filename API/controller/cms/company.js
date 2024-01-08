const { ObjectId } = require("mongodb");
const { showError } = require("../../middlewares");
const { Company } = require("../../models/index");
const companyController = {
  create: async (req, res, next) => {
    try {
      const { contact_person, contact_no, email, address, description } =
        req.body;
      await Company.create({
        company_id: req.params.id,
        contact_person,
        contact_no,
        email,
        address,
        description,
      });
      res.json({ message: "Company data added!!" });
    } catch (err) {
      showError(err, next);
    }
  },
  update: async (req, res, next) => {
    try {
      const { contact_person, contact_no, email, address, description } =
        req.body;
      await Company.findByIdAndUpdate(req.params.id, {
        contact_person,
        contact_no,
        email,
        address,
        description,
      }).exec();
      res.json({ message: "Updated Successfully" });
    } catch (err) {
      showError(err, next);
    }
  },
  delete: async (req, res, next) => {
    try {
      const id = new ObjectId(req.params.id);
      await Company.deleteMany({ company_id: id }).exec();
      res.json({ message: "Deleted Successfully!!" });
    } catch (err) {
      showError(err, next);
    }
  },
  show: async (req, res, next) => {
    try {
      const id = new ObjectId(req.params.id);
      const companies = await Company.aggregate([
        { $match: { company_id: id } },
        {
          $lookup: {
            from: "users",
            localField: "company_id",
            foreignField: "_id",
            as: "creator",
          },
        },
      ]).exec();
      const company = companies.map((compan) => {
        return {
          creator: compan.creator[0],
          contact_person: compan.contact_person,
          contact_no: compan.contact_no,
          email: compan.email,
          address: compan.address,
          description: compan.description,
        };
      });
      res.json(company);
    } catch (err) {
      showError(err, next);
    }
  },
};
module.exports = companyController;
