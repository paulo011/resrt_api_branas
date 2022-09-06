const postsData = require('../data/postsData')

exports.getPosts = () => postsData.getPosts();

exports.getPost = async (id)=> {
    const post = await postsData.getPost(id)
    if(!post) throw new Error('Post not found')
    return post
}

exports.savePost = async (post) =>{
    const existingPost = await postsData.getPostByTilte(post.title)
    if(existingPost) throw new Error('Post alrealy exists')
    return postsData.savePost(post)
}

exports.deletePost = (id)=> postsData.deletePost(id)

exports.updatePost = async(id, post) => {
    await exports.getPost(id)
    return postsData.updatePost(id, post)
}
