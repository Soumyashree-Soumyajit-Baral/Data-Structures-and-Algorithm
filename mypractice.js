// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

const { arrayBuffer } = require("stream/consumers");

// function readLine() {
// 	idx++;
// 	return data[idx - 1];
// }

function hello(){
    console.log('hello');
}
hello();
let helllo=function(){
    console.log("hello soumya");
}
helllo();
let arr=[1,2,3,4,5,6,7]
arr.reverse();
console.log(arr);
var n=20;
n=50
console.log(n);
let sum=arr.reduce((a,b)=> a+b);
console.log(sum);
let arr1=new Array(10);
console.log(arr1);
let numbers = [45, 4, 9, 16, 25];

let txt = 0;
for (let x in numbers) {
  txt += numbers[x];
  console.log(x);
}
console.log(txt);
let arr2=[5,6,2,1,3]
for(let i=0;i<arr2.length;i++){
  for(let j=0;j<arr2.length;j++){
    if(arr2[i]<arr2[j]){
      let temp=arr2[j];
      arr2[j]=arr2[i];
      arr2[i]=temp;
      console.log(arr2);
    }
  }
}
console.log(arr2)
