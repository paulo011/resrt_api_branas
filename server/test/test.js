const axios = require('axios')
const crypto = require('crypto')
const postsService = require('../service/postsService')

const generate = () => {
  return crypto.randomBytes(20).toString('hex')
}

test('Should get posts',async ()=> {
  const post1 = await postsService.savePost({title:generate(), content:generate()})
  const post2 = await postsService.savePost({title:generate(), content:generate()})
  const post3 = await postsService.savePost({title:generate(), content:generate()})
  
  const response = await axios({
    url:'http://localhost:5000/posts',
    method: 'get'
  })
  const posts = response.data

  expect(posts).toHaveLength(3)
})
