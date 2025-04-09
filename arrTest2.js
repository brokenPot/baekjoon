const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const num = Number(input.shift())
let answer = "";
for(let i=0 ; i < num; i++){
           // const [a,b] = input[i].split(' ')
           //  console.log( Number(a)+Number(b))
    const [num1, num2] = input[i].split(" ").map((item) => +item);
    answer += num1 + num2 + "\n";
}

console.log(answer);


// 5
// 1 1
// 12 34
// 5 500
// 40 60
// 1000 1000
//
//
// 2
// 46
// 505
// 100
// 2000

