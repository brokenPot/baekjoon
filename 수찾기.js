// 첫째 줄에 자연수 N(1 ≤ N ≤ 100,000)이 주어진다.
// 다음 줄에는 N개의 정수 A[1], A[2], …, A[N]이 주어진다.
// 다음 줄에는 M(1 ≤ M ≤ 100,000)이 주어진다.
// 다음 줄에는 M개의 수들이 주어지는데,
// 이 수들이 A안에 존재하는지 알아내면 된다.
// 모든 정수의 범위는 -231 보다 크거나 같고 231보다 작다

// 1
// 1
// 0
// 0
// 1
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input1.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n")
// 해시로 풀기
const key = {}
const N = Number(input[0])
const nArray = input[1].split(' ').map(i => {
    key[Number(i)] = 1
    return Number(i)
})

const binarySearch = function (arr) {
    let start = 0;
    let end = arr.length-1
    while(start<=end){
        arr[start] = key[arr[start]] ? 1 : 0
        arr[end] =key[arr[end]] ? 1 : 0
        start++
        end--
    }
};
const mArray = input[3].split(' ').map(i => {
    return Number(i)
})

binarySearch(mArray)

 mArray.map((item)=>{console.log(item)})

