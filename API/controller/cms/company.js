const { ObjectId } = require("mongodb");
const { showError } = require("../../middlewares");
const { Company } = require("../../models/index");
const companyController = {
  detail: async (req, res, next) => {
    try {
      const id = new ObjectId(req.params.id);
      const user = await Company.find({ company_id: id });

      if (user.length > 0) {
        console.log(user);
        res.json(user);
      } else {
        res.status(400).json({ message: "No contact person" });
      }
    } catch (err) {
      showError(err, next);
    }
  },
  create: async (req, res, next) => {
    try {
      const { contact_person, contact_no, email, address, description } =
        req.body;
      const company = await Company.create({
        company_id: req.params.id,
        contact_person,
        contact_no,
        email,
        address,
        description,
      });
      res.json({ success: "Company data added!!", company });
    } catch (err) {
      res.status(400).json({ message: "Error" });
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
      res.json({ success: "Updated Successfully" });
    } catch (err) {
      showError(err, next);
    }
  },
  delete: async (req, res, next) => {
    try {
      const id = new ObjectId(req.params.id);
      await Company.deleteMany({ company_id: id }).exec();
      res.json({ success: "Deleted Successfully!!" });
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
      ]);
      const company = companies.map((compan) => {
        return {
          name: compan.creator[0].name,
          image: compan.creator[0].image,
          Email: compan.creator[0].email,
          number: compan.creator[0].number,
          description: compan.creator[0].description,

          contact_person: compan.contact_person,
          contact_no: compan.contact_no,
          email: compan.email,
          address: compan.address,
          description: compan.description,
        };
      });
      console.log(company);
      console.log(companies);
      res.json(company);
    } catch (err) {
      showError(err, next);
    }
  },
};
module.exports = companyController;
