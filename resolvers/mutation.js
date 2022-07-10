const Mutation = {
    addPost: (_, args, context) => {
        return context.dataSources.post.addPost(args);
    },
    updatePost: (_, args, context) => {
        return context.dataSources.post.updatePost(args);
    },
    deletePost: (_, args, context) => {
        return context.dataSources.post.deletePost(args);
    },
    addComment: (_, args, context) => {
        return context.dataSources.comment.addComment(args);
    },
    updateComment: (_, args, context) => {
        return context.dataSources.comment.updateComment(args);
    },
    deleteComment: (_, args, context) => {
        return context.dataSources.comment.deleteComment(args);
    }
};

module.exports = Mutation;