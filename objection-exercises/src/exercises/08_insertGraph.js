const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')


const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert a new person name Peter Bynum with two pet DOGs named Rocco & Rosey
  const graph = await User.query().insertGraph({
    firstName: 'Peter',
    lastName: 'Bynum',
    email: 'peter222@example.com',
    pets: [
      {
        type: 'DOG',
        name: 'Rocco',
      },

      {
        type: 'DOG',
        name: 'Rosey',
      },

    ],

  })

  console.log(graph)

  // -----
  cleanup()
}

run()
