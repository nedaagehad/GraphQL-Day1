const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    postId: String,
    content: String,
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("comment", commentSchema);

module.exports = Comment;