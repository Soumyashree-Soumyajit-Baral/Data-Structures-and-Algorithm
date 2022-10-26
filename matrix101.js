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
function ston(list){
	for(let i=0;i<list.length;i++){
		list[i]=parseInt(list[i]);
	}
}
let nm=readLine().split(" ");
let n=parseInt(nm[0]);
let m=parseInt(nm[1]);
let matrix=[];
for(let i=0;i<n;i++){
	let arr=readLine().split(" ");
	ston(arr);
	matrix.push(arr);
}
let sumofoddnumbers=0;
for(let i=0;i<n;i++){
	for(let j=0;j<m;j++){
		if(matrix[i][j]%2 !=0){
			sumofoddnumbers=sumofoddnumbers+matrix[i][j];
		}
	}
}
console.log(sumofoddnumbers);