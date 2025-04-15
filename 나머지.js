const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input1.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const remainders = input.map(num => num % 42);
const unique = new Set(remainders);

console.log(unique.size);