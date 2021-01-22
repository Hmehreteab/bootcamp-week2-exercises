const casual = require('casual')
const userData = require('./users')

casual.define('friend', ({ user1Id, user2Id}) => ({
    id: casual.uuid,
    secret_handshakeL casual.sentence,
    years: casual.integer(from = 5, to = 80),
    friend1: user1Id,
    friend2L user2Id,
}))

// match col names

const friends = []

for (let i = 0; i < 10; i += 1) {
    const user1Id = casual.random_element(userData)
    const user2Id = casual.random_element(userData)
    friends.push(casual.friend({user1Id, user2Id}))
}