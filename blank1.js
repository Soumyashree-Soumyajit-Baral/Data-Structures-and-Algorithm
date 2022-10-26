// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//     idx++;
//     return data[idx - 1];
// }

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
// let t = parseInt(readLine());
// let arr = [];
// for (let i = 0; i < t; i++) {
//     let letter = readLine().split(" ")
//     arr.push(letter);
// }
// // console.log(arr)
// let word = readLine().split("");
// // console.log(word);
// for (let item = 0; item < arr.length; item++) {
//     for(let i=0;i<word.length;i++){
//         if (word[i] === arr[item][0]) {
//             word[i]= arr[item][1];
//         } else if (word[i] === arr[item][1]) {
//             word[i] = arr[item][0];
//         }
//     }
// }
// console.log(word);


// let t = parseInt(readLine());
// let arr = [];

// for (let i = 0; i < t; i++) {
//     let letter = readLine().split(" ");
//     arr.push(letter);
// }
// let t = parseInt(readLine());
// let arr = [];
// for (let i = 0; i < t; i++) {
//     let letter = readLine().split(" ")
//     arr.push(letter);
// }
// let word = readLine().split("");
// for (let item = 0; item < arr.length; item++) {
//     for(let i=0;i<word.length;i++){
//         if (word[i] === arr[item][0]) {
//             word[i]= arr[item][1];
//         } else if (word[i] === arr[item][1]) {
//             word[i] = arr[item][0];
//         }
//     }
// }
// let str1='';
// for(let i=0;i<word.length;i++){
// 	str1+=word[i];
// }
// console.log(str1);

// let inp = readLine();
// let fr = inp.split('');
// let le = fistr.length;
// for(let j = 0;j < le ;j++){
// 	if(m.has(fr[j])){
// 		let g = m.get(fr[j]);
// 		fr[j] = g;
// 	}
// }

// let ans = fr.join('');
// console.log(ans);



// let mass=prompt("Enter mass");
// let height=prompt("Enter height");

// if(mass<=0 || isNaN(mass)){
//     alert("INVALID INPUT");
// }
// if(height<=0 || isNaN(height)){
//     alert("INVALID INPUT");
// }

// let bmi=mass/(height*height);
// console.log(bmi);

// let tc=parseInt(readLine());
// let moviearray=[];
// for(let i=0;i<tc;i++){
//     let op=readLine();
//     console.log(op);
//     let movie=readLine();
//     console.log(movie);
//     if(op==="add"){
//         moviearray.push(movie);
//     }else if(op==='remove'){
//         moviearray.pop();
//     }    
// }
// console.log(moviearray);
// let havelicense=readLine();
// let istired=readLine();
// let issober=readLine();
// console.log(havelicense,istired,issober);
// if(havelicense=='true'&& istired=='false'&& issober=='true'){
//     console.log("you can drive");
// }else{
//     console.log('you cannot drive');
// }

//
function ispalindrome(n){
	let num=n;
	let rev=0;
	while (n>0){
		let rem=n%10;
		rev=rev*10+rem;
		n=parseInt(n/10);
	}
	if(num===rev){
		console.log('true')
	}else{
		console.log('F')
	}
}

let n=121;
ispalindrome(n);

