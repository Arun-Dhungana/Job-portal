const jwt = require("jsonwebtoken");
const imagesize = require("image-size");
const { Users } = require("../models");
const multer = require("multer");

const debug = () => {
  process.env.DEBUG == true;
};

const isCompany = async (req, res, next) => {
  if (req.user.type !== "company") {
    res.status(400).json({ message: "Access only for company" });
  } else {
    next();
  }
};
const isJobseeker = async (req, res, next) => {
  if (req.user.type !== "jobseeker") {
    res.status(400).json({ message: "Access only for job seeker" });
  } else {
    next();
  }
};
const showError = async (err, next) => {
  if (debug) {
    console.error(err);
  }

  next({
    status: 400,
    message: err,
  });
};
const Auth = async (req, res, next) => {
  if ("authorization" in req.headers) {
    const token = req.headers.authorization.split(" ").pop();
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const id = decoded.id;
      const user = await Users.findById(id);
      if (user) {
        req.uid = id;
        req.user = user;
        next();
      } else {
        res.status(400).json({ message: "Invalid token" });
      }
    } catch (err) {
      res.status(400).json({ message: "Invalid token" });
    }
  } else {
    res.status(400).json({ message: "Token missing" });
  }
};
const fileStorage = (mimeTypes = []) =>
  multer({
    storage: multer.diskStorage({
      destination: (req, file, cb) => cb(null, "/uploads"),
      filename: (req, file, cb) => {
        const ext = file.originalname.split(".").pop();

        const filename =
          Date.now() + `${Math.floor(Math.random() * 100)}` + `.${ext}`;
        cb(null, filename);
      },
    }),
    fileFilter: (req, file, cb) => {
      if (mimeTypes.length > 0) {
        if (mimeTypes.includes(file.mimetype)) {
          cb(null, true);
        } else {
          cb({ status: 400, message: "File no supported" }, false);
        }
      } else {
        cb(null, true);
      }
    },
  });

module.exports = { isCompany, isJobseeker, showError, Auth, fileStorage };
