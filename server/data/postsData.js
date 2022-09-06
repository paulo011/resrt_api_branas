const database = require ('../infra/dataBase')

exports.getPosts = () => database.query('select * from blog.post')

exports.getPost = (id) => database.oneOrNone('select * from blog.post where id = $1', [id])

exports.getPostByTilte = (title) => database.oneOrNone('select * from blog.post where title = $1', [title])

exports.savePost = (post) => database.one('insert into blog.post (title, content) values ($1, $2) returning*', [post.title, post.content])

exports.deletePost = (id) => database.query('delete from blog.post where id = $1', [id])

exports.updatePost = (id, post) => database.query('update blog.post set title = $1, content = $2 where id = $3', [post.title, post.content, id])

