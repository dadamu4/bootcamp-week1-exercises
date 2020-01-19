// import casual module
const casual = require('casual')
const userData = require('./users')

casual.define('friend', requestorId => ({
  id: casual.uuid,
  firstName: casual.first_name,
  lastName: casual.last_name,
  requestorId,
  status: casual.enum,
  created_at: casual.moment,
  updated_at: casual.moment,

}))

const friendData = []

for (let i = 0; i < 30; ++i) {
  const requestorId = casual.random_element(userData).id
  friendData.push(casual.friend(requestorId))
}

module.exports = friendData
