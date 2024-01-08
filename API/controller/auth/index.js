const { Users } = require("../../models/index");
const { showError } = require("../../middlewares/index");
const bcyrpt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authController = {
  register: async (req, res, next) => {
    try {
      const { name, email, password, confirm_password, number, role } =
        req.body;
      const exist = await Users.findOne({ email: email });
      if (exist) {
        if (exist.role !== role) {
          next({
            message: `You are already registered as ${exist.role}`,
          });
        } else {
          next({
            message: "Did you mean login?",
          });
        }
      }
      if (password === confirm_password) {
        const hash = bcyrpt.hashSync(password, bcyrpt.genSaltSync(10));
        const user = await Users.create({
          name,
          email,
          password: hash,
          number,
          role,
        });
        res.json(user);
      } else {
        next({
          message: "Wrong password confirmed",
        });
      }
    } catch (err) {
      showError(err, next);
    }
  },
  login: async (req, res, next) => {
    try {
      const { email, password, role } = req.body;
      const exist = await Users.findOne({ email: email });

      if (exist) {
        if (exist.role !== role) {
          next({
            message: `You cannot login as ${role}`,
          });
        }
      } else {
        next({ message: "Wrong email!!" });
      }
      if (
        bcyrpt.compareSync(
          password,
          "$2a$10$Bhp.JsFzfn0Tag2fdVZsv.hIUDbRaMbT49kBjC0/xtY8ijQ35XEVu"
        )
      ) {
        const user = await Users.findOne({ email });
        const token = jwt.sign(
          {
            id: user._id,
            iat: Math.floor(Date.now() / 1000) - 30,
            exp: Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60,
          },
          process.env.JWT_SECRET
        );
        res.json({ user, token });
      } else {
        next({ message: "Wrong Password" });
      }
    } catch (err) {
      showError(err, next);
    }
  },
};
module.exports = authController;
