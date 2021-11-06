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
  // console.log('enrollments: ', enrollments);
  // console.log('classes: ', classes);
  // console.log('students: ', students);


const TEMP = await Enrollment.aggregate(
    [
      {
        $lookup: {
        from: "Student",
        localField: "_sudentID", 
        foreignField: "_id", 
        as: "Students_enrollments"
      }
    }
  ]
  );

  console.log(TEMP);
}
