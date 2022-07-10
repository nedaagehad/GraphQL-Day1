const { DataSource } = require("apollo-datasource");
const Post = require("../models/post.model");

class PostDataSource extends DataSource {
  initialize(config) {
    this.context = config.context;
  }

  async addPost(post) {
    return await Post.create(post);
  }

  async getAllPosts() {
    return await Post.find();
  }

  async updatePost({ id, title, text }) {
    return await Post.findByIdAndUpdate(id, { title, text }, { new: true });
  }

  async deletePost({ id }) {
    return await Post.findByIdAndDelete(id);
  }
}

module.exports = PostDataSource;