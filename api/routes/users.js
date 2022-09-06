const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

//User Settings - update user info
router.put('/users/settings/:id', async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    try {
      const updateUser = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json(updateUser);
    } catch (error) {
      res.status(401).json(err);
    }
  } else {
    res.status(401).json('אין הרשאה לעדכן מידע');
  }
});

// //User Settings - delete user info
router.delete('/settings/:id', async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);

      try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json('המשתמש נמחק');
      } catch (error) {
        res.status(401).json(err);
      }
    } catch (error) {
      res.status(404).json('משתמש לא נמצא');
    }
  } else {
    res.status(401).json('אין הרשאה למחוק מידע');
  }
});

// Get user
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;

    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
