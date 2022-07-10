const Query = {
    posts: (_, args, context) => {
      return context.dataSources.post.getAllPosts();
    },
    comments: (_, { postId }, context) => {
      return context.dataSources.comment.getCommentsByPostId(postId);
    },
  };
  
  module.exports = Query;