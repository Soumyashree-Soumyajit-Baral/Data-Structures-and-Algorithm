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
let isneg=true
if(arr[0]>0){
	isneg=false;
}
var iszebra=true;
for(let i=0;i<n;i=i+2){
	if(isneg){
		if(arr[i]>0 || arr[i+1]<1){
			iszebra=false;
			break;
		}
	}else{
		if(arr[i]<1 ||arr[i+1]>0){
			iszebra=false
			break;
		}
	}
}
if(iszebra){
	console.log("True")
}else{
	console.log("False")
}