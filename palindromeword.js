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
function ispalindrome(word){
	if(word.length<=1){
		return word;
	}
	let len=word.length;
	let newword=word.substring(0,len-1);
	return word[len-1] + ispalindrome(newword);
}
let n=parseInt(readLine());
for(let i=0;i<n;i++){
	let word=readLine();
    let rword=ispalindrome(word);
    if(rword==word){
		console.log("True");
	}
    else{
        console.log("False")
    }
}