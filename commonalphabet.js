let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let n= parseInt(readLine());
let basemap=new Map();
let str=readLine().split("");
console.log(str.length)
for(let item of str){
    if(basemap.has(item)){
        basemap.set(item,basemap.get(item)+1);
    }else{
        basemap.set(item,1);
    }
}
for(let i=1;i<n;i++){
    let str1=readLine();
    console.log(str1.length)
    let tempmap=new Map();
    for(let item of str1){
        if(basemap.get(item)>0){
            if(tempmap.has(item)){
                tempmap.set(item,tempmap.get(item)+1);
            }else{
                tempmap.set(item,1);
            }
            basemap.set(item,basemap.get(item)-1);
        }
        
    }
    basemap=tempmap;
}
let ans=[];
for(let keys of basemap.keys()){
    ans.push(keys);
}
ans.sort();
for(let i=0;i<ans.length;i++){
    console.log(ans[i],basemap.get(ans[i]));
}
// let arr1=new Map([...basemap].sort());
// console.log(arr1);