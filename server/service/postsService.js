const postsData = require('../data/postsData')

exports.getPosts = () => postsData.getPosts();

exports.savePost = (post) => postsData.savePost(post)

exports.deletePost = (id)=> postsData.deletePost(id)