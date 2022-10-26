let a=  prompt('Enter the value of a');
let b=  prompt('Enter the value of b');

function cb(res){
    console.log(res);
}

function sum(a,b,cb){
    var res=parseFloat(a)+parseFloat(b);
    cb(res);
}

sum(a,b,cb);