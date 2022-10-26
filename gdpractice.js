let fs=require("fs");
let data=fs.readFileSync(0,"utf-8").split("\n");
let index=0;
function readLine(){
	index++;
	return data[index-1];
}


let n=parseInt(readLine());
let map=new Map();
for(let i=0;i<n;i++){
	let input=readLine().split(" ");
	if(map.has(input[0])){
		continue;
	}else{
		map.set(input[0],input[1]);
	}
}

let max=0;
let map1=new Map();
for(let game of map.values()){
	if(map1.has(game)){
		let count=map1.get(game);
		count++;
		map1.set(game,count);
		max=Math.max(max,map1.get(game));
	}else{
		map1.set(game,1);
	}
}

let arr=[];
for(let [key,value] of map1){
	if(value===max){
		arr.push(key);
	}
}
arr.sort();
console.log(arr[0]);
if(map1.has("football")){
	console.log(map1.get("football"));
}else{
	console.log(0);
}


// Tower of Hanoi is a mathematical puzzle where we have three rods and n disks. The objective of the puzzle is to move the entire stack to another rod, obeying the following simple rules: 

// Only one disk can be moved at a time.
// Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack i.e. a disk can only be moved if it is the uppermost disk on a stack.
// No disk may be placed on top of a smaller disk.