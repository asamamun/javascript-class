console.log(process.cwd()) // Absolute path of the current working directory.
console.log(__filename) // Absolute path of the file that holds the current code.
console.log(__dirname) // Absolute path of the directory that holds __filename.
//console.log(os.homedir()) // The user's home directory.

const path = require("path");
console.log(path.join("src", "pkg", "t.js"))
console.log(path.resolve("t.js"))