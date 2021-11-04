
let robotLocation = [1, 1]; // column, row
let roomCount = 1;
let cornerRoomsVisited = 0; // robot may not start in a corner room

const grid = [
  {
    coordinates: [1, 1], 
    visited: true,
    walls: ['closed', 'closed', 'none', 'none']
  },
  {
    coordinates: [1, 2], 
    visited: false,
    walls: ['closed', 'closed', 'closed', 'none']
  },
  {
    coordinates: [1, 3], 
    visited: false,
    walls: ['closed', 'closed', 'closed', 'none']
  },
];

const robotAction = (robotLocation) => {

  // match the robot's current location with the corresponding room in the grid array
  for (const room of grid) {
    if (room.coordinates[0] === robotLocation[0] && room.coordinates[1] === robotLocation[1]) {
      console.log('Robot is in room: ', room.coordinates);



      
      return;
    }
  }
}

  // // check if current room is a corner room:
  // if ()


  // // base case: door is initially closed 
  // if ( grid[i].walls[0] === 'closed') {


  // TESTING
  robotAction(robotLocation);
