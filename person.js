let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// Define the required class here...
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}

// DO NOT CHANGE ANYTHING BELOW THIS LINE
let inputString = readLine().split(" ");
let character = new Person(inputString[0],inputString[1]);
console.log(character.name);
console.log(character.age);


// class Person{
//   constructor(list){
//       this.name=list[0];
//       this.age=parseInt(list[1]);
//   }
// }

// // DO NOT CHANGE ANYTHING BELOW THIS LINE
// let inputString = readLine().split(" ");
// let character = new Person(inputString);
// console.log(character.name);
// console.log(character.age);