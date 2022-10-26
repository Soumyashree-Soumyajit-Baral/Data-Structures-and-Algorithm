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
let nk=readLine().split(" ");
let n=parseInt(nk[0]);
let k=parseInt(nk[1]);
let arr=readLine().split(" ");
for(let j=0;j<n;j++){
	arr[j]=parseInt(arr[j]);
}
let frequency=0;
for(let i=0;i<n;i++){
	if(arr[i]===k){
		frequency++;
	}
}
console.log(frequency);