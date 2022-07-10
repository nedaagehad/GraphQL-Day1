const Query = require("./query");
const Mutation = require("./mutation");
const Post = require("./post");
const Comment = require("./comment");

const resolvers = {
    Query,
    Mutation,
    Post, 
    Comment
};

module.exports = resolvers;