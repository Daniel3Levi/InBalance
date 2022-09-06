const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      uniq: true,
    },
    desc: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    youtubeId: {
      type: String,
      required: false,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: false,
    },
    postType: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Post', PostSchema);
