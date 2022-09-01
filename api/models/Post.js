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
      uniq: true,
    },
    isAdmin: {
      type: Boolean,
      defau,
    },
    categories: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Post', PostSchema);
