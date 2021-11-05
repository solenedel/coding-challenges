const mongoose = require('mongoose')
const initdb = require('./initdb')
const models = require('./models')

main()

async function main() {
  
  const mongo = await initdb()

  const { Student, Class, Enrollment } = models()

  const matilda = await Student.findOne({ name: /matilda/i })
  // Complete assignment here


}
