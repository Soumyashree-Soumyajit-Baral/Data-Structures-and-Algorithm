class resultarray{
    constructor(arr,n){
        this.array=arr;
        this.idx=n;
    }
    getEven(){
        let list=[];
        for(let i=0;i<this.array.length;i++){
            if(this.array[i]%2===0){
                list.push(Number(this.array[i]));
            }
        }
        return list;
    }
    multiplyByN(){
        let list1=[];
        for(let i=0;i<this.array.length;i++){
            list1.push(this.array[i]*this.idx);
        }
        return list1;
    }
    removeidx(){
        let list2=[];
        for(let i=0;i<this.array.length;i++){
            if(i!=this.idx){
                list2.push(Number(this.array[i]));
            }
        }
        return list2;
    }
}
var arr=prompt("Enter the array items").split(",");
var n=prompt("Enter the index");
var input=new resultarray(arr,n);
console.log(input.getEven());
console.log(input.multiplyByN());
console.log(input.removeidx());