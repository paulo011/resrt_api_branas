const database = require ('../infra/dataBase')

exports.getPosts = () => database.query('select * from blog.post')

exports.savePost = (post) => database.one('insert into blog.post (title, content) values ($1, $2) returning*', [post.title, post.content])

exports.deletePost = (id) => database.none('delete from blog.post where id = $1', [id])