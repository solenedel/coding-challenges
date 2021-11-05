const mongoose = require('mongoose')
const { 
  StudentSchema, 
  ClassSchema, 
  EnrollmentSchema 
} = require('./schema')
  
function models() {
  const Student = mongoose.model('Student', StudentSchema)
  const Class = mongoose.model('Class', ClassSchema)
  const Enrollment = mongoose.model('Enrollment', EnrollmentSchema)
  return { Student, Class, Enrollment }
}

module.exports = models