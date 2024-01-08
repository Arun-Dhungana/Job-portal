const { Schema, model } = require("mongoose");
const Users = model(
  "Users",
  new Schema(
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      number: {
        type: Number,
        required: true,
      },
      role: {
        type: String,
        required: true,
        set: (value) => value.toLowerCase(),
        enum: ["jobseeker", "company"],
      },
      images: {
        type: String,
      },
    },
    {
      timestamps: true,
      autoCreate: true,
      autoIndex: true,
    }
  )
);
module.exports = Users;
