let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let n= parseInt(readLine());
let list=[];
let arr=[];
for(let i=0;i<n;i++){
	list.push(parseInt(readLine()));
}
for(let i=0;i<n;i++){
	arr.push(parseInt(readLine()));
}
let tinc=0;
let child=0;
for(let i=0;i<n;i++){
	if(arr[i]>2){
		tinc=tinc+list[i];
		child++;
	}
}
console.log(tinc/child);