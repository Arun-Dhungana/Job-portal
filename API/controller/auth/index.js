const { Users } = require("../../models/index");
const { showError } = require("../../middlewares/index");
const bcyrpt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authController = {
  register: async (req, res, next) => {
    try {
      const {
        name,
        email,
        password,
        confirm_password,
        number,
        role,
        description,
      } = req.body;

      const url = req.cloudinaryUrl;

      const exist = await Users.findOne({ email: email });
      if (exist) {
        if (exist.role !== role) {
          res.status(400).json({
            message: `You are already registered as ${exist.role}`,
          });
        } else {
          res.status(400).json({
            message: "Did you mean login?",
          });
        }
      }
      if (password == confirm_password) {
        const hash = bcyrpt.hashSync(password, bcyrpt.genSaltSync(10));
        await Users.create({
          name,
          email,
          password: hash,
          number,
          role,
          image: url,
          description,
        });
        res.json({ success: "Successfully registered" });
      } else {
        res.json(400).json({
          message: "Wrong password confirmed",
        });
      }
    } catch (err) {
      showError(err, next);
    }
  },
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await Users.findOne({ email: email });

      if (!user) {
        res
          .status(400)
          .json({ message: "User not found! Do you want to register" });
      }
      if (bcyrpt.compareSync(password, user.password)) {
        const token = jwt.sign(
          {
            id: user._id,
            iat: Math.floor(Date.now() / 1000) - 30,
            exp: Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60,
          },
          process.env.JWT_SECRET
        );

        res.json({ user, token, success: "Loggged In successfully" });
      } else {
        res.status(400).json({ message: "Wrong Password" });
      }
    } catch (err) {
      showError(err, next);
    }
  },
  // image: async (req, res, next) => {
  //   try {
  //     const user = await Users.findById(req.uid);
  //     if (!user) return res.status(400).json({ message: "No user" });
  //     return res.status(200).json({ url: user.image.url });
  //   } catch (error) {
  //     return res.status(400).json({ message: "No user" });
  //   }
  // },
};
module.exports = authController;
