
function converttoobject(arr){
    let obj=new Object();
    for(let i=0;i<arr.length;i=i+2){
        obj[arr[i]]=arr[i+1];
    }
    return obj;
}
var arr=prompt("Enter array").split(",");
console.log(converttoobject(arr));