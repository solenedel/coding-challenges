const mongoose = require('mongoose')
const initdb = require('./initdb')
const models = require('./models')

main()

async function main() {
  
  const mongo = await initdb()
  const { Student, Class, Enrollment } = models()

  const matilda = await Student.findOne({ name: /matilda/i });

  // Complete assignment here


  // TASK 1: 
  // Find all Enrollments that Student Matilda has. 
  // Print the IDs of the Enrollments and Classes to the console.

  const matildasEnrollments = await Enrollment.find({ _studentID: matilda.id });

  // parse data returned from query
  JSON.parse(JSON.stringify(matildasEnrollments));

  // iterate through the enrollments array
  console.log('Matilda\'s enrollments');
  for (const enrollment of matildasEnrollments) {
    console.log(`Enrollment ID: ${enrollment.id}, Class ID: ${enrollment._classID}`);
  }

  // TASK 2:
  // List all Enrollments for each Student with the Student and Class names, print this to console.

  const classes = await Class.find();
  const enrollments = await Enrollment.find();
  const students = await Student.find();

  for (const enrollment of enrollments) {

   console.log((await Student.find({  _id: enrollment._studentID }))[0].name);

   console.log((await Class.find({  _id: enrollment._classID }))[0].name);

   // EXTRA CREDIT 
   console.log('Score: ', (await enrollment.points) * (classes[0].credits));
  }

}
