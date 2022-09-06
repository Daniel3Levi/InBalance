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
router.post('/login', async (req, res) => {
  try {
    // BUG - NEED TO BE FIX - https://bobbyhadz.com/blog/javascript-error-cannot-set-headers-after-they-are-sent-to-client
    const user = await User.findOne({ phoneNumber: req.body.phoneNumber });

    !user && res.status(400).json('מידע שגוי');

    const validated = await bcrypt.compare(req.body.password, user.password);

    !validated && res.status(400).json('מידע שגוי');

    const { password, ...others } = user._doc;

    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
