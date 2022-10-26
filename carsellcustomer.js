let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// Your class should be named `CarSell`.
// Your method should be named `getPromisingCustomers`
// Your method should return the indices of customers who are willing to pay greater than or equal to 90% of the car value
class CarSell {
	constructor(customerProposals) {
		this.list = customerProposals;
		this.l = customerProposals.length;
	}
	getPromisingCustomers() {
		let arr = 0;
		for (let i = 0; i < this.l; i++) {
			if (this.list[i] >= 900000) {
				// arr.push(i);
				console.log(i);
				arr++;
			}

		}
		if (arr === 0) {
			console.log(-1);
			// arr.push(-1);
			// return arr;
		// } else {
		// 	return arr;
		}
	}
}


let numCustomers = parseInt(readLine());
let customerProposals = [];
for (let i = 0; i < numCustomers; i++) {
	customerProposals.push(parseInt(readLine()));
}

let car = new CarSell(customerProposals);
car.getPromisingCustomers();
// for (let j of car.getPromisingCustomers()) {
// 	console.log(j);
// }


// class CarSell {
// 	constructor(customerProposals) {
// 		this.list = customerProposals;
// 		this.l = customerProposals.length;
// 	}
// 	getPromisingCustomers() {
// 		let arr = [];
// 		for (let i = 0; i < this.l; i++) {
// 			if (this.list[i] >= 900000) {
// 				arr.push(i);
// 			}

// 		}
// 		if (arr.length === 0) {
// 			arr.push(-1);
// 			return arr;
// 		} else {
// 			return arr;
// 		}
// 	}
// }


// let numCustomers = parseInt(readLine());
// let customerProposals = [];
// for (let i = 0; i < numCustomers; i++) {
// 	customerProposals.push(parseInt(readLine()));
// }

// let car = new CarSell(customerProposals);
// for (let j of car.getPromisingCustomers()) {
// 	console.log(j);
// }