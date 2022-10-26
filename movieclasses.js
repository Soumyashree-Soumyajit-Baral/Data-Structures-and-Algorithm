let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// Define your class here
// your class name should be 'Movie' and  method name as 'run'
class Movie {
    constructor(lengthInMinutes, numCharacters, language) {
        this.length = parseInt(lengthInMinutes);
        this.num = parseInt(numCharacters);
        this.lan = language;
    }
    run() {
        console.log(this.lan);
        let notice = ("This is a " + this.lan + " movie with " + this.num + ' characters and is ' + this.length + ' minutes long.');
        console.log(notice);
        return notice;
    }
}

// DO NOT CHANGE ANYTHING BELOW THIS LINE

let language = readLine();
let numCharacters = readLine();
let lengthInMinutes = readLine();

let movie = new Movie(lengthInMinutes, numCharacters, language)
console.log(movie.run());