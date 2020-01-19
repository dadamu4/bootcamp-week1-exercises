// import casual module
const casual = require('casual')

casual.define('user', () => ({
  id: casual.uuid,
  email: casual.email,
  dob: casual.moment,
  firstName: casual.first_name,
  lastName: casual.last_name,
  created_at: casual.moment,
  updated_at: casual.moment,
}))


const userData = []

for (let i = 0; i < 20; ++i) {
  userData.push(casual.user)
}

module.exports = userData
