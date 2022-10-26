// let map= new Map([[1,'one'],[2,"two"]]);
// let map1={1:'one',2:"two"}
// console.log(typeof(map1));
// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//   idx++;
//   return data[idx - 1];
// }
// let n= parseInt(readLine());
// let basemap=new Map();
// let str=readLine();
// for(let item of str){
//     if(basemap.has(item)){
//         basemap.set(item,basemap.get(item)+1);
//     }else{
//         basemap.set(item,1);
//     }
// }
// for(let i=1;i<n;i++){
//     let str1=readLine();
//     let tempmap=new Map();
//     for(let item of str1){
//         if(basemap.get(item)>0){
//             if(tempmap.has(item)){
//                 tempmap.set(item,tempmap.get(item)-1);
//             }else{
//                 tempmap.set(item,1)
//             }
//             basemap.set(item,basemap.get(item)+1);
//         }
//     }
//     basemap=tempmap;
// }
// let arr=[];
// for(let keys of basemap.keys()){
//     arr.push(keys);
// }
// arr.sort();
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i],basemap.get(arr[i]));
// }
// function mul(l,r){
//     let sum=0;
//     if(r<=0){
//         return sum;
//     }
//     sum=sum+l;
//     return sum+mul(l,r-1);
// }
// console.log(mul(4,2));