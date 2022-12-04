let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

// Fill in the following function.
// Please do not change the function name.
function doubleOrSquare(number) {
	if(n<0){
		return n*n
	}
	return n*2
}


// -------- DO NOT CHANGE ANYTHING BELOW THIS LINE --------
let n = parseInt(readLine());
console.log(doubleOrSquare(n));