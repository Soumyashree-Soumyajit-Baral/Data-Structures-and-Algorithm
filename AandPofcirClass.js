let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------



// Your class should be named `Circle`.
// Method to get area should be named `getArea`
// Method to get circumference should be named `getCircumference`.
// Your class should take radius `r` as input when creating an object.
class Circle{
    constructor(radius){
        this.rad=radius;
        this.pi=3.14;
    }
    getArea(){
        if(this.rad>0){
            return Math.ceil(this.pi*this.rad*this.rad);
        }else{
            return 0;
        }
    }
    getCircumference(){
        if(this.rad>0){
            return Math.ceil(2*this.pi*this.rad);
        }else{
            return 0;
        }
    }
}


let oneCircle = new Circle(parseFloat(readLine()));
console.log(oneCircle.getArea());
console.log(oneCircle.getCircumference());