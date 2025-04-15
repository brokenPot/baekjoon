// 85
// 8

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input1.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let max = 0
let maxIndex = 0

input.forEach( (num,i) => {
     if(num > max){
         max =num
         maxIndex = i+1
     }
});

console.log(max)
console.log(maxIndex)
