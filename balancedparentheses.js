let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function getAllBalancedParan(n){
    // Implement this function
	let ans=[];
	sol(n,n,"");
	function sol(o,c,str){
		if(o===0 && c===0){
			ans.push(str);
			return;
		}
		if(c<o){
			return;
		}
		if(o!=0){
			sol(o-1,c,str+"(");
		}
		if(c!=0){
			sol(o,c-1,str+")");
		}
	}
    return ans;
}

// Do not edit anything below
let n = parseInt(readLine());
let allBalancedParan = getAllBalancedParan(n);
allBalancedParan.sort();
for(expr of allBalancedParan){
    console.log(expr);
}