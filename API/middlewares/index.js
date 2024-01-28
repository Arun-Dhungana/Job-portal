const jwt = require("jsonwebtoken");
const imagesize = require("image-size");
const { Users } = require("../models");
const multer = require("multer");
const debug = () => {
  process.env.DEBUG == true;
};

const isCompany = async (req, res, next) => {
  if (req.user.type !== "company") {
    next({ message: "Access only for company" });
  } else {
    next();
  }
};
const isJobseeker = async (req, res, next) => {
  if (req.user.type !== "jobseeker") {
    next({ message: "Access only for job seeker" });
  } else {
    next();
  }
};
const showError = async (err, next) => {
  if (debug) {
    console.error(err);
  }

  next({
    message: "Problem while executing",
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
        next({ message: "Invalid token" });
      }
    } catch (err) {
      next({ message: "Invalid token" });
    }
  } else {
    next({ message: "Token missing" });
  }
};
const fileStorage = (mimeTypes = []) =>
  multer({
    storage: multer.diskStorage({
      destination: (req, file, cb) =>
        cb(null, "/Users/arundhungana/Documents/GitHub/Job-portal/API/uploads"),
      filename: (req, file, cb) => {
        const ext = file.originalname.split(" ").pop();

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
          cb({ message: "File no supported" }, false);
        }
      } else {
        cb(null, true);
      }
    },
  });

module.exports = { isCompany, isJobseeker, showError, Auth, fileStorage };
