let fs= require("fs");
let data=fs.readFileSync(0,"utf-8").split("\n");
let index=0;

function readLine(){
    index++;
    return data[index-1];
}
let n=parseInt(readLine());
let male=[];
let female=[];
for(let i=0;i<n;i++){
    let student=readLine().split(" ");
    if(parseInt(student[0])===0){
        female.push(parseInt(student[1]))
    }else{
        male.push(parseInt(student[1]));
    }
}
let smale=male.sort((a,b)=> b-a);
let sfemale=female.sort((a,b)=> b-a);
let output=[];

for(let i=0;i<sfemale.length;i++){
    output.push(sfemale[i]);
}
for(let i=0;i<smale.length;i++){
    output.push(smale[i]);
}
for(each of output){
    console.log(each);
}
