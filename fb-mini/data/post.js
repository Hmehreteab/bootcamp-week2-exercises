const casual = require('casual')
const userData = require('./users')

casual.define('post', ({ userId }) => ({
    userId: casual.uuid,
    created_at: casual.moment,
    updated_at: casual.moment,
    text: casual.string,
    likes: casual.integer(from = 5, to = 80),
}))

// match col names

const posts = []

for (let i = 0; i < 10; i += 1) {
    const userId = casual.random_element(userData)
    posts.push(casual.likes)
}