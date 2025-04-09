const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input1.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(line => line.trim());


const data  = input
let arrCase1 = []
let arrCase2 = []

const wholeLength = data[0].split(' ').length
const nameArr = data[0].split(' ')
const ageArr = data[1].split(' ')


for (let i=0; i<wholeLength ; i++){
    arrCase1.push([nameArr[i], Number(ageArr[i])])
    arrCase2.push({name: nameArr[i], age:Number(ageArr[i])})
}

console.log(arrCase1)
console.log(arrCase2)

// # 예시 출력: [('가희', 32), ('라희', 22), ('나희', 34), ('다희', 54), ('마희', 28)]
// res2 = #TODO
// print(res2)