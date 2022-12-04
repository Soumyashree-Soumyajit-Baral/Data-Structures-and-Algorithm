let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
function ston(arr){
	for(let i=0;i<arr.length;i++){
		arr[i]=parseInt(arr[i])
	}
}
let n=parseInt(readLine())
for(let i=0;i<n;i++){
	let t=parseInt(readLine())
	let arr=readLine().split(" ")
	ston(arr)
	let n1=0
	let n2=0
	for(let j=0;j<t;j++){
		if(arr[j]>n1){
		    n2=n1;
			n1=arr[j]
		}else if(arr[j]!==n1){
			n2=Math.max(n2,arr[j])
		}
	}
	if(n2){
		console.log(n2)
	}else{
		console.log("NA")
	}
}

// 3
// 6
// 12 35 1 10 34 1
// 3
// 10 5 10
// 3
// 10 10 10