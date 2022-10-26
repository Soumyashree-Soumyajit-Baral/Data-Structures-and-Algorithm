let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// Following function takes integer and should return True if it's prime 
// otherwise  should return False.
function isPrime(n){
    // You can start below this
    if (n<0){
        n=n*(-1);
    }
	let count=0;
	for(let i=2;i<n;i++){
		if(n%i===0){
			count=count+1;
		}
	}
	if(count===0){
		return "True";
	}else{
		return "False";
	}
    
}




//Please don't change anything below this line.
let number=parseInt(readLine());
console.log(isPrime(number));