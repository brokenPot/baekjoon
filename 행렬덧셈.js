//  첫째 줄에 행렬의 크기 N 과 M이 주어진다.
//  둘째 줄부터 N개의 줄에 행렬 A의 원소 M개가 차례대로 주어진다.
//  이어서 N개의 줄에 행렬 B의 원소 M개가 차례대로 주어진다.
//  N과 M은 100보다 작거나 같고, 행렬의 원소는 절댓값이 100보다 작거나 같은 정수이다.
//
//  첫째 줄부터 N개의 줄에 행렬 A와 B를 더한 행렬을 출력한다. 행렬의 각 원소는 공백으로 구분한다.

// 4 4 4
// 6 6 6
// 5 6 100

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input1.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(line => line.trim());

// input.shift.split n m 확보
// 덩어리 자르기

let wholeString = ''

const [N,M]= input.shift().split(' ').map(e=>Number(e));
const data = input.map((i)=>i.split(' ').map(i=>Number(i)))
for(let row = 0; row<N; row++){
    for(let col = 0; col<M; col++){
        wholeString += String(data[row][col]+data[N+row][col])+' '
    }
    wholeString += '\n'
}

console.log(wholeString)

