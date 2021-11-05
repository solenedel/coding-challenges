const mongoose = require('mongoose')
const initdb = require('./initdb')
const models = require('./models')

main()

async function main() {
  
  const mongo = await initdb()

  const { Student, Class, Enrollment } = models()

  const matilda = await Student.findOne({ name: /matilda/i });

  // Complete assignment here

  // console.log('MATILDA ID: ', matilda.id);

  // TASK 1: 
  // Find all Enrollments that Student Matilda has. 
  // Print the IDs of the Enrollments and Classes to the console.

  const enrollments = await Enrollment.find({ _studentID: matilda.id });

  // parse data returned from query
  JSON.parse(JSON.stringify(enrollments));

  // iterate through the enrollments array
  console.log('Matilda\'s enrollments');
  for (const enrollment of enrollments) {
    console.log(`Enrollment ID: ${enrollment.id}, Class ID: ${enrollment._classID}`);
  }
  

}
