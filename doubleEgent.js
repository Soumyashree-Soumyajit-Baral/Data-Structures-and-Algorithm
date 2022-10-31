let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string forma
function reverse(arr){
	for(let i=0;i<arr.length;i++){
		arr[i]=arr[i].split("").sort().join("")
	}
}
let n=parseInt(readLine())
let arr=readLine().split(" ")
reverse(arr);
let map=new Map()
for(let i=0;i<arr.length;i++){
	if(map.has(arr[i])){
		let cnt=map.get(arr[i])
		cnt++;
		map.set(arr[i],cnt)
	}else{
		map.set(arr[i],1)
	}
}
let no=0
for(let value of map.values()){
	if(value>no){
		no=value;
	}
}
console.log(no)