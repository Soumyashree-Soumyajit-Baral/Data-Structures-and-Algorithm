let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// Your class should be named as `Rectangle`. 
// Method to get area should be named as `rectangleArea`.
// Method to get perimeter should be named as `rectanglePerimeter`.
// You should be taking `length` and `width` as inputs when creating the object for your class.
class Rectangle{
    constructor(length,width){
        this.l=length;
        this.w=width;
    }
    rectangleArea(){
        if(this.l>0 && this.w>0){
            return (this.l*this.w);
        }else{
            return 0;
        }
    }
    rectanglePerimeter(){
        if(this.l>0 && this.w>0){
            return (2*(this.l+this.w));
        }else{
            return 0;
        }
    }
}

let length = parseInt(readLine());
let width  = parseInt(readLine());
let newRectangle =new Rectangle(length,width);
console.log(newRectangle.rectangleArea());
console.log(newRectangle.rectanglePerimeter());