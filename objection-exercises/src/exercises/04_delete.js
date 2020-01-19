const cleanup = require('../lib/cleanup')
// Import models
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Delete all CATS
  const deleteCats = await Pet.query().delete().where('type', 'CAT')
  console.log(deleteCats)

  // -----
  cleanup()
}

run()
