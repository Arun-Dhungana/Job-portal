const express = require("express");
const mongoose = require("mongoose");
const { config } = require("dotenv");
const routes = require("./routes/index");
const cors = require("cors");
config();
const app = express();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://jobhub-nu.vercel.app");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Private-Network", true);

  res.setHeader("Access-Control-Max-Age", 7200);

  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use((error, req, res, next) => {
  console.log(error);
  res.json({ message: "Problem while excuting request" });
});
const listener = app.listen(
  process.env.API_PORT,

  async () => {
    console.log(`Server is starting at http://${listener.address().port}`);
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
