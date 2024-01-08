const { Schema, model } = require("mongoose");
const Jobs = model(
  "Jobs",
  new Schema(
    {
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
        enum: ["top", "premium", "normal"],
      },

      category: {
        type: String,

        set: (value) => value.toLowerCase(),
        enum: [
          "bank-finance",
          "ngo-ingo",
          "sales-marketing",
          "government",
          "army-police",
          "cooperative",
          "school-college",
          "healthcare",
          "hotel-restaurant",
          "customer_care",
          "it-computer",
          "logistics-supply_chain",
        ],
        required: true,
      },
      experience: {
        type: String,
        required: true,
      },
      salary: {
        type: Number,
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
      },
      deadline: {
        type: Date,
        required: true,
      },
      status: {
        type: Boolean,
        default: true,
        required: true,
      },
      count: {
        type: Number,
        required: true,
      },
    },
    {
      timestamps: true,
      autoCreate: true,
      autoIndex: true,
    }
  )
);

module.exports = Jobs;
