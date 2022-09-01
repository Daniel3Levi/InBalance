const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

//Register - create new user
router.post('/register', async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashadPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      password: hashadPass,
      profilePic: req.body.profilePic,
      isAdmin: req.body.isAdmin,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});
//Login

module.exports = router;
