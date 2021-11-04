/* 
A robot that has been dropped into a square 9x9 grid of square rooms. 
Walls between rooms have doors in them, but walls on the edge do not. 
All of the doors are closed initially.

The robot can:

1. Check each direction (N,S,E,W) for door status, which returns open, closed or none.

2. Move one room over at a time through an open door.

3. Remember details of rooms it’s visited since it was dropped in.

Questions

You can write your answers with words, flowcharts or pseudocode.

1. The robot starts at the lower right corner of the grid. 
How can the robot use its abilities to count the total number of rooms in the grid?

2. The game resets and the robot moves to a random room in the grid. 
Does your approach still work?

Extra Credit

3. How many moves does it take to complete the count? Can you find the answer in less moves?

4. How much data did you save from each move? Can you save less data?
*/

// NOTES
// direction is numbered 1 to 4 (N = 1,  W = 2, S = 3, E = 4) COUNTERCLOCKWISE
// keep track of robot's current location (room number)

// let roomNumber = 1; // robot's current location 
// const roomsVisited = [ 1 ]; // rooms already visited by robot
// // to count the rooms,just do roomsvisited.length at the end

// // need to keep track of the coordinates

// // helper functions
// const checkForRooms = (roomNumber, direction) => {
//   if (roomNumber.direction === 'closed') {
//     roomNumber.direction = 'open'; // open door
//     roomNumber ++; // move to next room
//     roomsVisited.push(roomNumber) // add new room to rooms visited
//   } else if (roomNumber.direction === 'open' && ) {

//   } else { // none

//   }
// };

// const roomNumber = {
//   visited: false,
//   coordinates: [c, r],
//   1: 'closed', // N
//   2:  'closed', // E
//   3: 'closed', // S
//   4: 'closed', // W
// };

let grid = [];

for (let i = 1; i < 10; i ++) {
  for (let j = 1; j < 10; j ++) {
    grid.push([j, i]);
  }
  grid.push('\n');
}


console.log(grid);