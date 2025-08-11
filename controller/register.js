const User = require("../model/user");
const {hashpassword} = require("../utils/hashpassword")


exports.register = async (req, res) => {
    const hash = await hashpassword(req.body.password)
  try {
    const { email, name } = req.body;

    const newuser = await User.create({
      email,
      name,
      password :hash,
    });

    newuser.save();
    res.send(newuser);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
