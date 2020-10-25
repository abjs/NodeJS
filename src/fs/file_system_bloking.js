// write data from  test.txt and print that contexts
// with bloking
let fs = require('fs');
let data = fs.readFileSync('fs/test.txt');
console.log(data.toString());
console.log("Test")
