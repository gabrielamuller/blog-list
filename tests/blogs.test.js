const listHelper = require('../utils/list_helper')

const blogs = [
  {
    _id: '5a422a851b54a676234d17f7',
    title: 'React patterns',
    author: 'Michael Chan',
    blogs: 1,
    url: 'https://reactpatterns.com/',
    likes: 7,
    __v: 0
  },
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    blogs: 2,
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0
  },
  {
    _id: '5a422b3a1b54a676234d17f9',
    title: 'Canonical string reduction',
    author: 'Edsger W. Dijkstra',
    blogs: 2,
    url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
    likes: 12,
    __v: 0
  },
  {
    _id: '5a422b891b54a676234d17fa',
    title: 'First class tests',
    author: 'Robert C. Martin',
    blogs: 3,
    url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
    likes: 10,
    __v: 0
  },
  {
    _id: '5a422ba71b54a676234d17fb',
    title: 'TDD harms architecture',
    author: 'Robert C. Martin',
    blogs: 3,
    url: 'http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html',
    likes: 0,
    __v: 0
  },
  {
    _id: '5a422bc61b54a676234d17fc',
    title: 'Type wars',
    author: 'Robert C. Martin',
    blogs: 3,
    url: 'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
    likes: 2,
    __v: 0
  }
]

// Total likes
describe('total likes', () => {

  // No blogs
  const noBlogs = []
  test('of empty list is zero', () => {
    const result = listHelper.totalLikes(noBlogs)
    expect(result).toBe(0)
  })

  // One blog
  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    }
  ]
  test('when list has only one blog, equals the likes of that', () => {
    const oneBlog = [listWithOneBlog[0].likes]
    const result = listHelper.totalLikes(oneBlog)
    expect(result).toBe(5)
  })

  // Bigger list
  test('of a bigger list is calculated right', () => {
    const listWithBlogs = blogs.map(e => e.likes)
    const result = listHelper.totalLikes(listWithBlogs)
    expect(result).toBe(36)
  })
})

// Favorite blog
describe('Favorite Blog', () => {
  test('most likes', () => {
    const result = listHelper.favoriteBlog(blogs)
    expect(result).toEqual(blogs[2])
  })
})

// Most blogs
describe('Author', () => {
  test('Most blogs', async () => {
    const mostBlogs = listHelper.mostBlogs(blogs)

    expect(mostBlogs).toMatchObject({
      author: 'Robert C. Martin',
      blogs: 3
    })
  })
})

// Most likes
describe('Author', () => {
  test('Most likes', async () => {
    const mostLikes = listHelper.mostLikes(blogs)

    expect(mostLikes).toMatchObject({
      author: 'Edsger W. Dijkstra',
      likes: 17
    })
  })
})