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
function isrepeat(str){
	let map=new Map();
	for(let c of str){
		if(map.has(c)){
			let cnt=map.get(c);
			map.set(c,cnt++);
		}else{
			map.set(c,1);
		}
	}
    
	for(let i=0;i<str.length;i++){
		if(map.get(str[i])==1){
			return i;
			
		}
	}
    return -1;
}

let n=parseInt(readLine());
for(let i=0;i<n;i++){
	let str=readLine();
	console.log(isrepeat(str));
}