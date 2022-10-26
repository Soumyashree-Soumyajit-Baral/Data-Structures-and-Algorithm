let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// Define your class here
// your class name should be 'Movie' and method names as 'certify' and 'run'

class Movie {
	constructor(lengthInMinutes, numCharacters, language) {
		this.length = lengthInMinutes;
		this.num = numCharacters;
		this.lan = language;
	}
 	static certify(movieObject) {
		if (movieObject.numCharacters >= 2 && movieObject.lengthInMinutes <= 240) {
			return true;
		} else {
			return false;
		}
	}
	run() {
		if (Movie.certify(this)) {
			let notice = ("This is a " + this.lan + " movie with " + this.num + " characters and is " + this.length + " minutes long and is certified.");
			return notice;
		} else {
			let notice = ("This is a " + this.lan + " movie with " + this.num + " characters and is " + this.length + " minutes long and is not certified.");
			return notice;
		}
	}
}




// DO NOT CHANGE ANYTHING BELOW THIS LINE


let language = readLine();
let numCharacters = parseInt(readLine());
let lengthInMinutes = parseInt(readLine());

let movie = new Movie(lengthInMinutes, numCharacters, language)
console.log(movie.run());