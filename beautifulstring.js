// let map= new Map([[1,'one'],[2,"two"]]);
// let map1={1:'one',2:"two"}
// console.log(typeof(map1));
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
// let t=parseInt(readLine());
// for(let i=0;i<t;i++){
//     let str=readLine();
//     let ans=0;
//     let map=new Map();
//     let cnta=0,cntb=0,cntc=0;
//     map.set("0 0",1);
//     for(let i=0;i<str.length;i++){
//         if(str[i]=="a"){
//             cnta++;
//         }else if(str[i]=='b'){
//             cntb++;
//         }else if(str[i]=='c'){
//             cntc++;
//         }
//         let curr=`${cnta-cntb} ${cnta-cntc}`;
//         if(map.has(curr)){
//             ans+=map.get(curr);
//             let cnt=map.get(curr);
//             map.set(curr,cnt++);
//         }else{
//             map.set(curr,1);
//         }
//     }
//     console.log(ans);
// }

let t=parseInt(readLine());
for(let i=0;i<t;i++){
    let str=readLine();
    let ans=0;
    
    let cnta=0,cntb=0,cntc=0;
    
    for(let i=0;i<str.length;i++){
        if(str[i]=="a"){
            cnta++;
        }else if(str[i]=='b'){
            cntb++;
        }else if(str[i]=='c'){
            cntc++;
        }
        if(cnta==cntb && cntb==cntc){
            ans++;
        }
    }
