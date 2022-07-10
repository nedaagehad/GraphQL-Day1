const Post = {
    id: (parent) => {
        return parent._id;
    },
    comments: (parent, args, context) => {
        return context.dataSources.comment.getCommentsByPostId(parent._id);
    }
}

module.exports = Post;