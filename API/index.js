const express = require("express");
const mongoose = require("mongoose");
const { config } = require("dotenv");
const routes = require("./routes/index");
const cors = require("cors");
config();
const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use((error, req, res, next) => {
  console.log(error);
  res.json({ message: "Problem while excuting request" });
});
const listener = app.listen(
  process.env.API_PORT,
  process.env.API_HOST,
  async () => {
    console.log(
      `Server is starting at http://${listener.address().address}/${
        listener.address().port
      }`
    );
    console.log("Press ctrl+c to exit");
    try {
      await mongoose.connect(process.env.MONGO_URL);
      console.log("MongoDb connected!!");
    } catch (err) {
      console.log(err);
      console.log("Problem while connecting with mongo");
    }
  }
);
