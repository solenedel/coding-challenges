
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

// ----------------------------- helper functions ---------------------------------- //

// returns true if corner room, false if not
const checkIfCornerRoom = (room) => {

  let noDoors = 0;
  for (const direction of room.walls) {
    if (direction === 'none') noDoors ++;

    if (noDoors === 2) {
      console.log('this is a corner room.');
      return true;
    }
  }
  return false;
};

// checks each direction for closed doors
const checkWalls = (room) => {

  // loop through the directions counterclockwise, starting at N
  for (let i = 0; i < room.walls.length; i ++) {
    if (room.walls[i] === 'none' || room.walls[i] === 'open') continue;
    
    else {
      // open the door
      room.walls[i] = 'open';
      
      // enter the next room, change coordinates based on direction of newly opened door
      switch (i) {
        case 0:
          console.log('Move North');

      }

      // add the new room to the rrom count
      roomCount ++;
    }
  }
};

// ------------------------------- main function ----------------------------------- //
const robotAction = (robotLocation) => {

  // match the robot's current location with the corresponding room in the grid array
  for (const room of grid) {

    if (room.coordinates[0] === robotLocation[0] && room.coordinates[1] === robotLocation[1]) {
      console.log('Robot is in room: ', room.coordinates);

      // check if current room is a corner room
     if (checkIfCornerRoom(room)) cornerRoomsVisited ++ ;

     // check the walls in each direction
      


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
