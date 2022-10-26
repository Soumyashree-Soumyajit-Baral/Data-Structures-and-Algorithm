let fs = require("fs");
const { Z_NO_COMPRESSION } = require("zlib");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// function findLuckyNumber(nums) {
//     // implement this function
//     let occurance = 0;
    
//     for (let i = 0; i < nums.length; i++) {
//         let count = 0;
//         let a = nums[i];
//         for (let j = 0; j < nums.length; j++) {
//             let b = nums[j];
//             if (a === b) {
//                 count++;
//             }
//         }
//         if (count === a && count>1) {
//             occurance++;
//             return (a);
//         }
//     }
//     if (occurance === 0) {
//         return (-1);
//     }
// }

function findLuckyNumber(nums) {
    // implement this function
    // let length=nums.length;
    let occurance = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]===nums[i+1]){
            occurance++;
        }else if (nums[i+1]>nums[i]){
            if(occurance===nums[i]){
                return occurance;
            }
        }
    }
    if(occurance===nums[nums.length-1]){
        return nums[nums.length-1];
    }
    return -1;
}
// DO NOT change anything below this line
let numElems = parseInt(readLine());
let inputArr = [];
for (let index = 0; index < numElems; index++) {
    inputArr.push(parseInt(readLine()));
}
console.log(findLuckyNumber(inputArr));