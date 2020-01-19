const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get the first 5 users, ordered by lastName
  const firstFive = await User.query().limit(5).orderBy('lastName')
  console.log(firstFive)

  // Get the second 5 users, ordered by lastName
  const secondFive = await User.query().offset(5).limit(5).orderBy('lastName')
  console.log(secondFive)

  // -----
  cleanup()
}

run()
