let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let a=parseInt(readLine());
if (a===1){
    console.log(6)
}
else if (a===2){
    console.log(5)
}
else if (a===3){
    console.log(4)
}
else if (a===4){
    console.log(3)
}
else if (a===5){
    console.log(2)
}
else if (a===6){
    console.log(1)
}
