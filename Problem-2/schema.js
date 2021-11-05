const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
  name: mongoose.Schema.Types.Mixed,
})
const ClassSchema = new mongoose.Schema({
  name: mongoose.Schema.Types.Mixed,
  credits: mongoose.Schema.Types.Mixed,
})
const EnrollmentSchema = new mongoose.Schema({
  _studentID: mongoose.Schema.Types.ObjectId,
  _classID: mongoose.Schema.Types.ObjectId,
  points: mongoose.Schema.Types.Mixed,
})

module.exports = {
  StudentSchema,
  ClassSchema,
  EnrollmentSchema
}
