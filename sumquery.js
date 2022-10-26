let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}
//spear engine problem.
// let sq=readLine().split(" ");
// let s=parseInt(sq[0]);
// let q=parseInt(sq[1]);
// let arr=readLine().split(" ");
// let arr1=[];
// let sum=0;
// for(let i=0;i<s;i++){
//     sum=sum+parseInt(arr[i]);
//     arr1[i]=sum;
// }
// for(let j=0;j<q;j++){
//     let list=readLine().split(" ");
//     let findex=parseInt(list[0]);
//     let lindex=parseInt(list[1]);
//     // let middle= arr.slice(findex,lindex+1);
//     // let sum=middle.reduce((a,b) => (a+b));
//     // console.log(sum);
//     if(findex===0){
//         console.log(arr[lindex]);
//     }else{
//         console.log(arr[lindex]-arr[findex]);
//     }
// }
// if(s===0){
//     console.log(arr[q]);
// }else{
//     console.log(arr[q]-arr[s]);
// }

// let nq=readLine().split(" ");
// let n=parseInt(nq[0]);
// let q=parseInt(nq[1]);
// let arr=readLine().split(" ");
// for(let i=0;i<n;i++){
// 	arr[i]=parseInt(arr[i]);
// }

// console.log(arr);
// for(let j=0;j<q;j++){
//     let list=readLine().split(" ");
//     let findex=parseInt(list[0]);
//     let lindex=parseInt(list[1]);
//     let middle= arr.slice(findex,lindex+1);
//     let sum=middle.reduce((a,b) => (a+b));
//     console.log(sum);
// }

// let mul=[];
// mul[0]=arr[0];
// let sum=arr[0];
// for(let i=1;i<n;i++){
//     sum=sum+arr[i];
//     mul[i]=sum;
// }
// for(let i=0;i<q;i++){
//     let list=readLine().split(" ");
//     let findex=parseInt(list[0]);
//     let lindex=parseInt(list[1]);
//     let sum1=mul[findex-1];
//     let sum2=mul[lindex];
//     if(findex!=0){
//         console.log(sum2-sum1);
//     }else{
//         console.log(sum2);
//     }
// }


let N= readLine().split(" ");
let n = parseInt(N[0]);
let q = parseInt(N[1]);
let array = readLine().split(" ");
 for(let i = 0 ;i< n ;i++){
array[i] =parseInt(array[i]);
 }
 let sum = [];
 sum[0] = array[0];
 for(let i =1 ;i < n ;i++){
   sum[i]= sum[i-1]+array[i];
 }
 console.log(sum);
 for(let i =0 ; i < q ; i++){
   let lr=readLine().split(" ");
   let l =parseInt(lr[0]);
   let r =parseInt(lr[1]);
   if(l===0){
     console.log(sum[r]);
   }
   else{
     console.log(sum[r]-sum[l-1]);
   }
 }