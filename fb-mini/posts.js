// import casual module
const casual = require('casual')
const userData = request('./users')

casual.define('post', ownerId () => ({
   id: casual.uuid,
   email: casual.email,
   firstName: casual.first_name
   lastName: casual.last_name,
   dob: casual.moment,

}))

const postData = []

for (let i = 0; i < 15; ++i) {
    const ownerId = casual.random_element
}

module.exports = postData