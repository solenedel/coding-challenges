const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')
const models = require('./models')

class DBServer {
  constructor() {
    this.db = null
    this.url = null
  }

  async start() {

    this.db = await MongoMemoryServer.create({
      instance: {
        dbName: "db"
      }
    })

    this.url = this.db.getUri()

    await mongoose.connect(this.url, { 
      useNewUrlParser: true,
      dbName: "db",
      useUnifiedTopology: true 
    })

  }

  async stop() {
      await mongoose.disconnect()
  }
}

async function initdb() {

  const server = new DBServer()
  await server.start()

  const { Student, Class, Enrollment } = models()

  const Physics = await Class.create({ name: "Physics", credits: 5 })
  const Astronomy = await Class.create({ name: "Astronomy", credits: 4 })
  const Literature = await Class.create({ name: "Literature", credits: 4 })

  const Matilda = await Student.create({ name: "Matilda Wormwood" })
  const Katniss = await Student.create({ name: "Katniss Everdeen" })

  const Matilda1 = await Enrollment.create({
    _studentID: Matilda._id,
    _classID: Physics._id,
    points: 4
  })
  const Matilda2 = await Enrollment.create({
    _studentID: Matilda._id,
    _classID: Astronomy._id,
    points: 2
  })

  const Katniss1 = await Enrollment.create({
    _studentID: Katniss._id,
    _classID: Literature._id,
    points: 0
  })
  const Katniss2 = await Enrollment.create({
    _studentID: Katniss._id,
    _classID: Astronomy._id,
    points: 1
  })

  return server
}

module.exports = initdb