const { Schema, model } = require("mongoose");
const Jobs = model(
  "Jobs",
  new Schema({
    creator_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "users",
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    timing: {
      type: String,
      required: true,
      set: (value) => value.toLowerCase(),
      enum: ["fulltime", "parttime"],
    },
    type: {
      type: [String],
      required: true,
      set: (value) => value.toLowerCase(),
      enum: ["top", "hot", "premium", "normal"],
      default: "normal",
    },
    category: {
      type: String,
      required: true,
      set: (value) => value.toLowerCase(),
      enum: [],
    },
    experience: {
      type: String,
      required: true,
    },
    salary: {
      type: Schema.Types.Mixed,
      required: true,
    },
    education: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    position_level: {
      type: String,
      required: true,
      set: (value) => value.toLowerCase(),
      enum: ["junior-level", "mid-level", "senior-level"],
    },
    opening: {
      type: Date,
      required: true,
      value: new Date().toDateString(),
    },
    deadline: {
      type: Date,
      required: true,
    },
  })
);
module.exports = Jobs;
