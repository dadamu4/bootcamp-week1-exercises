const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  /**
    Create a transaction. It should (without using insertGraph): create a new
    user with returning(), give that user a pet, and fetch the total number of
    pets. If that total number exceeds 15, it should delete all BIRDS. Test
    the transaction by throwing an error: throw new Error("This is an error").
   */

  const joe = await User.transaction(async trx => {
    const john = await User.query(trx)
      .insert({ firstName: 'John', lastName: 'Doe', email: 'joe33@example.com' })

    const joe = await john.$relatedQuery('pets', trx)
      .insert({ name: 'joe', type: 'FISH' })

    const total = await Pet.query().resultSize()

    if (total > 15) {
      const deleteBirds = await joe.delete().where('type', 'BIRD')
      console.log(deleteBirds)
    }

    // const total = await joe.where(joe.resultSize() > 15).delete().where('type', 'BIRD')


    return joe
  })


  // -----
  cleanup()
}

run()
