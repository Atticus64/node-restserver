
const mongoose = require('mongoose')

const yellow = '\x1b[33m'
const blue = '\x1b[34m'
const white = '\x1b[0m'


// Create a new Mongoose Connection
const dbConnection = async () => {

  try {
    mongoose.connect(process.env.MONGODB_CNN)

    console.log(`${yellow}Base de datos ${blue}online${white}`)

  } catch (error) {
    console.log(error)
    throw new Error('Error a la hora de iniciar la DB')
  }

}



module.exports = {
  dbConnection
}
