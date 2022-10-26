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
let n=parseInt(readLine());
let arr=readLine().split(" ");
ston(arr);
let plus=0;
let min=0;
let max=arr[0];
let least=arr[0];
for(let i=1;i<arr.length;i++){
	if(arr[i]<least){
		least=arr[i];
		min++;
	}else if(arr[i]>max){
		max=arr[i];
		plus++;
	}
}
console.log(plus,min);