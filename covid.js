let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let age = parseInt(readLine());
let dia = readLine();
if(age>60) {
console.log('u r eligible')
} else if (age>45 && dia==="yes") {
console.log('u r eligible')

} else {
console.log('u r not eligible')

}