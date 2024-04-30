const jwt = require("jsonwebtoken");
const imagesize = require("image-size");
const { Users } = require("../models");
const multer = require("multer");

const cloudinary = require("cloudinary").v2;
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
    storage: multer.memoryStorage(),
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
    filename: (req, file, cb) => {
      const ext = file.originalname.split(".").pop();

      const filename =
        Date.now() + `${Math.floor(Math.random() * 100)}` + `.${ext}`;
      cb(null, filename);
    },
  });
const cloudinaryUpload = async (req, res, next) => {
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
  });

  try {
    const result = await cloudinary.uploader.upload(req.file.buffer, {
      folder: "jobhub",
    });
    req.cloudinaryUrl = result.secure_url;
    // req.publicId = result.public_id; // Store Cloudinary URL for later use
    next(); // Move to the next middleware
  } catch (error) {
    console.error("Error uploading file to Cloudinary:", error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  isCompany,
  isJobseeker,
  showError,
  Auth,
  fileStorage,
  cloudinaryUpload,
};
