const { Schema, model } = require("mongoose");
const Company = model(
  "Company",
  new Schema(
    {
      company_id: {
        type: Schema.Types.ObjectId,
        requird: true,
        ref: "users",
      },
      contact_person: {
        type: String,
        required: true,
      },
      contact_no: {
        type: Number,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
    { timestamps: true, autoCreate: true, autoIndex: true }
  )
);
module.exports = Company;
