let fs = require("fs");
const { maxHeaderSize } = require("http");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
function ston(list) {
  for (let i = 0; i < list.length; i++) {
    list[i] = parseInt(list[i]);
  }
  
}

let n = parseInt(readLine());
let list = readLine().split(" ");
ston(list);
let maxlength = 1, currmaxlength = 1, endindex = 1;
for (let i = 1; i < n; i++) {
  if (list[i] > list[i - 1]) {
    currmaxlength++;
  } else {
    if (currmaxlength > maxlength) {
      maxlength = currmaxlength;
      endindex = i;
    }
    currmaxlength = 1;
  }
}
if (currmaxlength > maxlength) {
  maxlength = currmaxlength;
  endindex = n;
}
console.log(maxlength,(endindex - maxlength),endindex-1);