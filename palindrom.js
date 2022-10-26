let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let n=parseInt(readLine());
let dup=n;
let rev=0;
// while(n>0){
//     let rem=n%10;
//     rev=rev*10+rem;
//     n=parseInt(n/10);
// }
for(let i=n;i>0;i=n){
    let rem=n%10;
    rev=rev*10+rem;
    n=parseInt(n/10);
}
if (rev===dup) {
    console.log("Yes");
}else{
    console.log("No");
}
