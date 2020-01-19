const cleanup = require('../lib/cleanup')
// Import models

const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users with a specific name (pick it from your database)
  const specificName = await User.query().where('firstName', 'Reta')
  console.log(specificName)

  // Do the same with object notation

  // Get all DOGS and BIRDS
  const dog_bird = await Pet.query().whereIn('type', ['DOG', 'BIRD'])
  console.log(dog_bird)

  // -----
  cleanup()
}

run()


// Reta Ferry
