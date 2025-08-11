const User = require("../model/user");
const { validatepassword } = require("../utils/hashpassword");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isemail = await User.findOne({ email: email });

    if (!isemail) {
      res.send("email doesn't exists");
    }

    const ispass = await validatepassword(password, isemail?.password);
    // console.log(ispass);

    if (!ispass) {
      res.send("password error");
    }

    const token = await jwt.sign(
      { email: isemail?.email, name: isemail?.name },
      process.env.JWT_KEY,
      { expiresIn: "1min" }
    );
    res.send(token);
  } catch (err) {
    // console.log(err);
    res.send(err);
  }
};
