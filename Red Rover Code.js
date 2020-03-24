// Rover Object Goes Here
// ======================
const rover = {
  direction: 'North',
  name: 'Rover',
  x: 1,
  y: 1,
  travelLog: [{x:0, y:0}]
};
// ======================

console.log("The starting position for our rover is facing North, with {X, Y} coordinates {1, 1}")

function turnLeft(rover) {
  switch(rover.direction) {
    case 'North':
      rover.direction = 'West';
      break;
    case 'South':
      rover.direction = 'East';
      break;
    case 'East':
      rover.direction = 'North';
      break;
    case 'West':
      rover.direction = 'South';
      break;
  };


  console.log("Function turnLeft was called! Rover is now facing " + rover.direction);
}


function turnRight(rover){
  switch(rover.direction) {
    case 'North':
    rover.direction = 'East';
    break;
    case 'South':
    rover.direction = 'West'
    break;
    case 'East':
    rover.direction = 'South'
    break;
    case 'West':
    rover.direction = 'North';
    break;
    };
  console.log("Function turnRight was called! Rover is now facing " + rover.direction);
}


function moveForward(rover){
    switch(rover.direction) {
      case 'North':
        rover.y -= 1;
        break;
      case 'South':
        rover.y += 1;
        break;
      case 'East':
        rover.x += 1;
        break;
      case 'West':
        rover.x -= 1;
        break;
   
    }
    console.log("Function movedForward was called! Rover is now in coordinates {" + rover.x + ", " + rover.y + "}");
  }
  
  
function command(rover, cmd) {
    for(let i = 0; i < cmd.length; i++) {
      switch(cmd[i]) {
        case 'f':
          moveForward(rover);
          break;
       case 'r':
          turnRight(rover);
          break;
       case 'l':
          turnLeft(rover);
          break;
            }
            rover.travelLog.push({x : rover.x, y : rover.y})
    }
  }

  command(rover, 'rffrfflfrff');
  console.log("The travelLog is as follows:", rover.travelLog);


