const _ = require('lodash')

const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  if (blogs.length > 0) {
    return blogs.reduce((sum, likes) => sum + likes)
  } else {
    return 0
  }
}

const favoriteBlog = (blogs) => {
  const likes = blogs.map(blog => blog.likes)
  const favorite = likes.indexOf(Math.max(...likes))
  return blogs.at(favorite)
}

const mostBlogs = (blogs) => {
  const result = (_.values(_.groupBy(blogs.map(blog => blog.author))))
    .map(x => ({author: x[0], blogs: x.length}))
    .reduce((a, b) => b.blogs > a.blogs ? b : a)
  return result
}

const mostLikes = (blogs) => {
  const result = _.chain(blogs)
    .groupBy('author')
    .map((group, author) => {
      return {
        author: author,
        likes: group.reduce((prev, next) => {
          return (prev += next.likes)
        }, 0),
      }
    })
    .maxBy(object => object.likes)
    .value()

  return result
}
  
module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}