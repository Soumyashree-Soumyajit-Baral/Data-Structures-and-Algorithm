// let fs = require("fs");
// let data = fs.readFileSync(0, "utf-8").split("\n");
// let index = 0;
// function readLine() {
//     index++;
//     return data[index - 1];
// }

// function BMI(mass,height){
//     var ans=mass/(height*height);
//     if(mass <=0 || height<=0){
//         return "INVALID INPUT";
//     }
//     return ans;

// }

// var input=readLine().split(",");
// var mass=parseInt(input[0]);
// var height=parseInt(input[1]);
// console.log(BMI(mass,height));

let mass = prompt("Enter your Mass");
let height = prompt("Enter your Height");
if (mass <= 0 || isNaN(mass)) {
    alert("INVALID INPUT");
} else if (height <= 0 || isNaN(height)) {
    alert("INVALID INPUT");
} else {
    let bmi = mass / (height * height);
    console.log(bmi);
}

// var a;
// console.log(a);
// a = 10;