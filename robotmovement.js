let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Define your class here
// your class name should be 'RobotMovement' and method names as 'moveUp', 'moveDown', 'moveLeft' and 'moveRight' 
// class RobotMovement{
//   // location=[xCordinate,yCordinate];
  
//   constructor(){
//     this.xCoordinate=0;
//     this.yCoordinate=0;
//   }
//   moveUp(){
//     this.yCoordinate++;
//   }
//   moveDown(){
//     this.yCoordinate--;
//   }
//   moveLeft(){
//     this.xCoordinate--;
//   }
//   moveRight(){
//     this.xCoordinate++;
//   }
// }



// // DO NOT CHANGE ANYTHING BELOW THIS LINE
// let Num = parseInt(readLine());
// let myRobotMove = new RobotMovement();
// for (let index = 0; index  < Num; index ++) {
//   let currentMovement = readLine();
//   if (currentMovement === "up") {
//     myRobotMove.moveUp();
//   } else if (currentMovement === "down") {
//     myRobotMove.moveDown();
//   } else if (currentMovement === "left") {
//     myRobotMove.moveLeft();
//   } else {
//     myRobotMove.moveRight();
//   }
// }
// console.log(myRobotMove.xCoordinate);
// console.log(myRobotMove.yCoordinate);
class RobotMovement{
  constructor(arr){
    this.x=0;
    this.y=0;
    this.list=arr;
    this.l=arr.length;
  }
  location(){
    for(let i=0;i<this.l;i++){
      if(this.list[i]==="up"){
        this.y++;
      }else if(this.list[i]==="down"){
        this.y--;
      }else if(this.list[i]==="right"){
        this.x++;
      }else{
        this.x--;
      }
    }
  }
}

let n=parseInt(readLine());
let arr=[];
for(let i=0;i<n;i++){
  arr[i]=readLine();
}
let robot=new RobotMovement(arr);
robot.location();
console.log(robot.x);
console.log(robot.y);
