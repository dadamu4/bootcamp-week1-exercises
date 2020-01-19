const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get an instance of a user using findById(<YOUR_ID>)
  const toy = await User.query().findOne({ id: 'bc0069de-3749-4108-a895-1748780e1afe' })
  console.log(toy.fullName)

  // Use that instance to create a new pet related that user
  await toy.$relatedQuery('pets').insert({ name: 'james', type: 'DOG' })


  // Use that instance to get all of the user's pets and children
  // Hint -- use $fetchGraph
  // https://vincit.github.io/objection.js/api/model/instance-methods.html#fetchgraph
  const userPetChild = await toy.$fetchGraph('[pets, children]')
  console.log(userPetChild)

  // -----
  cleanup()
}

run()
