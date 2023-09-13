const User = require("../models/User");

const router = require("express").Router();
const CryptoJS = require("crypto-js");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

// REGISTER

router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRETS
    ).toString(),
  });
  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      // Use generic error message for security reasons
      return res.status(500).json("Wrong credentials !");
    }
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SECRETS
    );
    const Originpassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    Originpassword !== req.body.password &&
      res.status(401).json("Wrong credentials !");
    const accessToken = jwt.sign(
      {
        id: user.id,
        isAdmin: user.isAdmind,
      },
      process.env.JWT,
      {
        expiresIn: "3d",
      }
    );
    const { password, ...others } = user._doc;
    res.status(200).json({...others, accessToken });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
