let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
class Flight {
	constructor(upTime,downTime){
		this.upTime=upTime;
		this.downTime=downTime;
	}
	calculateFlight(){
		//write your code here
		let h1=parseInt(this.upTime[0]);
		let m1=parseInt(this.upTime[1]);
		let h2=parseInt(this.downTime[0]);
		let m2=parseInt(this.downTime[1]);
        let hr=h2-h1;
        let min=0;
        let time=0;
        if (m2>=m1){
            min=min+m2-m1;
            time=(hr*60)+min;
        }else{
            min=min+m1-m2;
            // hr=hr-1;
            time=(hr*60)-min;
        }
        
        return time;

	}
}

// -------- Do NOT edit anything below this line ----------
let upTime=readLine().split(':');
let downTime=readLine().split(':');
let NewFlight = new Flight(upTime,downTime);
console.log(NewFlight.calculateFlight());