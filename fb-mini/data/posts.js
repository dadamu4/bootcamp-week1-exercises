// import casual module
const casual = require('casual')
const userData = require('./users')

casual.define('post', ownerId => ({
  id: casual.uuid,
  text: casual.sentences(),
  ownerId,
  likes: casual.integer(0, 10),
  created_at: casual.moment,
  updated_at: casual.moment,

}))

const postData = []

for (let i = 0; i < 30; ++i) {
  const ownerId = casual.random_element(userData).id
  postData.push(casual.post(ownerId))
}

module.exports = postData
