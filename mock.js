//let data=new Date();

//console.log(data, typeof(data))
// let year=data.getFullYear()
// let month=data.getMonth()
// console.log(year,month)

const DateStr = new Date;
const day = DateStr.getDate();
const month = DateStr.getMonth();
const year = DateStr.getFullYear();
const date = `${day}/${month}/${year}`
console.log(date)

