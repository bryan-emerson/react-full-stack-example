let fetch = require('node-fetch')
let fs = require('fs').promises
let postsUrl = 'https://jsonplaceholder.typicode.com/posts'
let usersUrl = 'https://jsonplaceholder.typicode.com/users'

//gets local data
fetch(postsUrl)
  .then(response=> response.json())
  .then(data=> fs.writeFile("../react-full-stack-example/src/data/posts.json", JSON.stringify(data)))
  .then(()=> console.log("Posts Done!"))
  .catch(error=> console.error(error))
//gets local data
fetch(usersUrl)
  .then(response=> response.json())
  .then(data=> fs.writeFile("../react-full-stack-example/src/data/users.json", JSON.stringify(data)))
  .then(()=> console.log("Users Done!"))
  .catch(error=> console.error(error))