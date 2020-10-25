let fs = require('fs');
fs.readFile('fs/test.txt',(err, data) => {
    if (err) {
        console.log(err);
    }
    setTimeout(() =>{
        console.log("Display after 2 Second")
        console.log(data.toString());
    },5000)
  
});
//setTimeout(() =>console.log("hello world"),5000)
console.log("Start here...");