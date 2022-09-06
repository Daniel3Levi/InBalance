const router = require('express').Router();
const Post = require('../models/Post');

//Create Post
router.post('/new_post', async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savePost = await newPost.save();
    res.status(200).json(savePost);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Update Post
router.put('/update/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.phoneNumber === req.body.phoneNumber) {
      try {
        const updatePost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatePost);
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(404).json('אין הרשאה לעדכן מידע');
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
//   if (req.body.postId === req.params.id) {}

// Delete post

router.delete('/delete/:id', async (req, res) => {
  try {
    const postId = req.params.id.trim();
    const post = await Post.findById(postId);
    if (post.phoneNumber === req.body.phoneNumber) {
      await post.delete();
      res.status(200).json('פוסט נמחק');
    } else {
      res.status(401).json('אין גישה למחוק מידע');
    }
  } catch (error) {
    res.status(404).json(error);
  }
});

// Get Post
router.get('/post/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get all Posts && filters type,category, user
router.get('/filter', async (req, res) => {
  const postType = req.query.postType;
  const catName = req.query.categories;
  const phoneNumber = req.query.phoneNumber;
  try {
    let posts;
    if (phoneNumber) {
      posts = await Post.find({ phoneNumber });
    } else if (catName) {
      posts = await Post.find({
        categories: {
          $in: [catName],
        },
      });
    } else if (postType) {
      posts = await Post.find({ postType: postType });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
