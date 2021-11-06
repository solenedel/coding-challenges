

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

// checks each direction for closed doors
const checkWalls = (room) => {

  // loop through the directions counterclockwise, starting at N
  for (let i = 0; i < room.walls.length; i ++) {
    if (room.walls[i] === 'none' || room.walls[i] === 'open') continue;
    
    else {
      // open the door
      room.walls[i] = 'open';

      let oppositeDoor;
      // enter the next room, change robot coordinates based on direction of newly opened door
      switch (i) {
        case 0:
          console.log('move North');
          oppositeDoor = 2;
          currentLocation[1] ++;
          break;
        case 1: 
          console.log('move West');
          oppositeDoor = 3;
          currentLocation[0] ++;
          break;
        case 2:
          console.log('move South');
          oppositeDoor = 0;
          currentLocation[1] --;
          break;
        case 3:
          console.log('move East');
          oppositeDoor = 1;
          currentLocation[0] --;
          break;
        default:
          console.log('invalid direction');
      }

      // add the new room to the room count
      roomCount ++;

      // change the status of the new room's corresponding door to 'open'
      for (const room of grid) {
        if (room.coordinates[0] === robotLocation[0] && room.coordinates[1] === robotLocation[1]) {
          room.walls[oppositeDoor] = 'open';
        }
      }

      // NEXT: base case and recursive case

      // BASE CASE: no more rooms to check (cornerRoomsVisited = 4)
      // RECURSIVE CASE: cornerRoomsVisited is less than 4

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


let grid = {};

for (let i = 1; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    grid[[i, j]] = {
      coordinates: [i, j], 
      visited: false,
      walls: ['closed', 'closed', 'closed', 'closed']
    };
  } 
}

// console.log(grid);

// search the grid 
console.log(grid[[5,5]]);
console.log(grid[[2,7]].visited);
console.log(grid[[3,9]].coordinates);


const startGame = (currentLocation) => {

  // 

  const checkWalls = () => {

  };

};