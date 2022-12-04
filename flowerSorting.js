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
let arr= readLine().split(" ")
// arr.sort((a,b)=>a-b)
// console.log(...arr)
let count1=0;
let count2=0;
let count3=0;
let count4=0;
let count5=0;
for(let i=0;i<n;i++){
	arr[i]=parseInt(arr[i])
}
for(let i=0;i<arr.length;i++){
	if(arr[i]===1){
		count1++
	}else if(arr[i]===2){
		count2++
	}else if(arr[i]===3){
		count3++
	}else if(arr[i]===4){
		count4++
	}else{
		count5++
	}
}
// let newarr=[]
for(let i=0;i<arr.length;i++){
	if(i<count1){
		arr[i]=1
		count2++
		count3++
		count4++
	}else if(i<count2){
		arr[i]=2
		count3++
		count4++
	}else if(i<count3){
		arr[i]=3
		count4++
	}else if(i<count4){
		arr[i]=4
	}else{
		arr[i]=5
	}
}
console.log(...arr)