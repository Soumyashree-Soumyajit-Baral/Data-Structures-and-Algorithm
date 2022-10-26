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
function reversestring(givenstring){
	if(givenstring.length <=1 ){
		return givenstring;
	}
	let len=givenstring.length;
	let stringwithoutlastchar=givenstring.substring(0,len-1);
	return givenstring[len-1]+reversestring(stringwithoutlastchar);
}
let n=parseInt(readLine());
for(let i=0;i<n;i++){
	let string=readLine();
	console.log(reversestring(string));
}