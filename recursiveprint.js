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
function recursiveprint(l,r){
	// let list=[];
	if(l===r){
		// list.push(r);
		return r;
	}
	if(l>r){
		return;
	}
	// list.push(l);
	let nextno=[l,recursiveprint(l,r-1)];
    // list.push(nextno);
    console.log(nextno);
	return nextno[nextno.length-1];
} 

let t=parseInt(readLine());
for(let i=0;i<t;i++){
	let arr=readLine().split(" ");
	let l=parseInt(arr[0]);
	let r=parseInt(arr[1]);
	let l_r=recursiveprint(l,r);
	console.log(l_r);
}