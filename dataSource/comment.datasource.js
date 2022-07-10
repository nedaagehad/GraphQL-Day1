const { DataSource } = require("apollo-datasource");
const Comment = require("../models/comment.model");

class CommentDataSource extends DataSource {
  initialize(config) {
    this.context = config.context;
  }

  async getCommentsByPostId(postId) {
    return await Comment.find({ postId });
  }

  async addComment(comment) {
    return await Comment.create(comment);
  }

  async updateComment({ id, content }) {
    return await Comment.findByIdAndUpdate(id, { content }, { new: true });
  }

  async deleteComment({ id }) {
    return await Comment.findByIdAndDelete(id);
  }
}

module.exports = CommentDataSource;