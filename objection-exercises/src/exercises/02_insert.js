const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert yourself in the users table
  const insertYourself = await User.query().insert({
    firstName: 'Dagmawit',
    lastName: 'Adamu',
    email: 'something@example.com',
  })
  console.log(insertYourself)

  // Insert a pet belonging to you (get your ID from Postico or DBeaver)
  const insertPet = await Pet.query().insert({
    ownerId: '39344c17-45e7-485d-a521-2bc21fbf7832',
    type: 'DOG',
    name: 'Bob',
  })
  console.log(insertPet)

  // -----
  cleanup()
}

run()
