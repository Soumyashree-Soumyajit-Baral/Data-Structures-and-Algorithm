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
class InputReader {
	//implement the methods here 
	readFloats(num){
		for(let i=0;i<num;i++){
			let n=parseFloat(readLine()).toFixed(2)
			console.log(i,n)
		}
	}
	readStrings(num){
		for(let i=0;i<num;i++){
			let n1=readLine()
			console.log(i,n1)
		}
	}
	readIntegers(num){
		for(let i=0;i<num;i++){
			let n2=parseInt(readLine())
			console.log(i,n2)
		}
	}


};

// -------- Do NOT edit anything below this line ----------

let num = parseInt(readLine());
let typeOfInput = readLine();
let NewInputReader = new InputReader();	
if (typeOfInput === "string") {
		NewInputReader.readStrings(num);
} else if (typeOfInput === "integer") {
		NewInputReader.readIntegers(num);
} else {
		NewInputReader.readFloats(num);
}