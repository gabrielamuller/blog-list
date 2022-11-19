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
  
module.exports = {
  dummy,
  totalLikes
}