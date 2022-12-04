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
let str=readLine()
let newstr=""
for(let i=0;i<str.length;i++){
	if(str[i]==str[i].toUpperCase()){
		newstr=newstr+str[i].toLowerCase()
	}else{
		newstr=newstr+str[i].toUpperCase()
	}
}
console.log(newstr)