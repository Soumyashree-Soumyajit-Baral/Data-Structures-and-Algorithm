let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let n=parseInt(readLine())
let arr=[]
for(let i=0;i<n;i++){
	arr.push(parseInt(readLine()))
}
arr.sort((a,b)=>a-b);
//console.log(arr)
let count=0
let mlength=arr[0]
for(let i=0;i<n;i++){
	if(arr[i]-mlength >0){
		console.log(n-i)
		mlength=arr[i]
		count++
	}
}
if(count===0){
	console.log(0)
}