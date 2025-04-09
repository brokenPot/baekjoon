const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input1.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(line => line.trim());

let maxValue=0
let maxRow=0
let maxCol=0

const doubleArr = input.map((i)=>i.split(' ').map(e=>Number(e)))
//
for(let row =0; row<9;row++){
    for(let col =0; col<9;col++){
        if(maxValue<doubleArr[row][col]){
            maxValue = doubleArr[row][col]
            maxRow = row+1
            maxCol = col+1
        }
    }
}
console.log(maxValue)
console.log(maxRow, maxCol)


// 99면 시간 절약을 위해 탐색을 중지
// 그외 전체 탐색


// 9×9 격자판에 쓰여진 81개의 자연수 또는 0이 주어질 때,
// 이들 중 최댓값을 찾고 그 최댓값이 몇 행 몇 열에 위치한 수인지 구하는 프로그램을 작성하시오.
// 첫째 줄부터 아홉 번째 줄까지 한 줄에 아홉 개씩 수가 주어진다. 주어지는 수는 100보다 작은 자연수 또는 0이다.