const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users and their pets
  const userAndPets = await User.query().withGraphFetched('pets')
  console.log(userAndPets)

  // Get all users, their pets, AND their children
  const userPetsChildren = await User.query().withGraphFetched('[pets, children]')
  console.log(userPetsChildren)

  // Get all users, their parents, and their grandparents
  const userParentsGrand = await User.query().withGraphFetched('[parents, parents.parents]')
  console.log(userParentsGrand)

  // Get all users, their pets, their chilren, and their childrens' pets
  const userPetChildPet = await User.query().withGraphFetched('[pets, children, children.pets]')
  console.log(userPetChildPet)

  // -----
  cleanup()
}

run()
