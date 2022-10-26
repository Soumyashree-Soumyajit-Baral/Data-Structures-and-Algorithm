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
class Rectangle{
    constructor(length,width){
        this.l=length;
        this.w=width;
    }
    calculatePerimeter(){
        let perimeter=2*(this.l+this.w);
        return perimeter;
    }
}

// DO NOT CHANGE ANYTHING BELOW THIS LINE
let input=readLine().split(" ");
let length = parseInt(input[0]);
let width = parseInt(input[1]); 
let rectangle =new Rectangle(length, width);
console.log(rectangle.calculatePerimeter());