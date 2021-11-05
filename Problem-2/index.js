const mongoose = require('mongoose')
const initdb = require('./initdb')
const models = require('./models')

main()

async function main() {
  
  const mongo = await initdb()

  const { Student, Class, Enrollment } = models()

  const matilda = await Student.findOne({ name: /matilda/i });


  // Complete assignment here

  console.log('MATILDA ID: ', matilda.id);

  // 1. Find all Enrollments that Student Matilda has. 
  // +Print the IDs of the Enrollments and Classes to the console.
  const enrollments = await Enrollment.find({ _studentID: matilda.id });
  console.log('Matilda\'s enrollments: ', enrollments);

}
