let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}
function rotateArray(list, m) {
    if(m>0){
        let m1=m%list.length;
        let arr = [];
        for (let i = 0; i < m1; i++) {
            arr.push(list[i]);
        }
        list.splice(0, m1);
        // let newArray = list.concat(arr);
        return list.concat(arr);
    }
    return list;
}



let list = readLine().split(" ");
let m = parseInt(readLine());
let newarray = rotateArray(list, m);
for(each of newarray){
    console.log(each);
}
for (let i = 0; i < newarray.length; i++) {
    console.log(newarray[i]);
}

//correct one

// function rotateArray(list, m) {
//     if(m>0){
//         let m1=m%list.length;
//         for (let i = 0; i < m1; i++) {
//             list.unshift(list.pop());
//         }
//         return list;
//     }
//     return list;
// }
// let list = readLine().split(" ");
// let m = parseInt(readLine());
// let newarray = rotateArray(list, m);
// for (let i = 0; i < newarray.length; i++) {
//     console.log(newarray[i]);
// }