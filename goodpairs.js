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

function ston(arr){
	for(let i=0;i<arr.length;i++){
		arr[i]=parseInt(arr[i]);
	}
}
let arr=readLine().split(" ");
ston(arr);
let count=0;
for(let i=0;i<arr.length;i++){
	for(let j=i+1;j<arr.length;j++){
		if( arr[i]===arr[j]){
			count++;
		}
	}
}
console.log(count);