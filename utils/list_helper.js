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
  
module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}