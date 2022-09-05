const postsData = require('../data/postsData')

exports.getPosts = () => postsData.getPosts();
exports.getPost = (id)=> postsData.getPost(id)
exports.savePost = (post) => postsData.savePost(post)
exports.deletePost = (id)=> postsData.deletePost(id)
exports.updatePost = (id, post) => postsData.updatePost(id, post)