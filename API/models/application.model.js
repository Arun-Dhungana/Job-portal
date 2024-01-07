const { Schema, model } = require("mongoose");
const Application = model(
  "Application",
  new Schema(
    {
      job_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "jobs",
      },
      user_id: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true,
      },
      resume: {
        type: String,
      },
      applied_date: {
        type: Date,
        required: true,
        value: new Date().toISOString(),
      },
      status: {
        type: String,
        required: true,
        set: (value) => value.toLowerCase(),
        enum: ["rejected", "accepted", "pending"],
        default: "pending",
      },
    },
    { timestamps: true, autoCreate: true, autoIndex: true }
  )
);
module.exports = Application;
