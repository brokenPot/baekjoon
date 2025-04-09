const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input1.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const N = Number(input[0])
const arr = []
for (let i = 1; i<=N ; ++i){
    if(i%2===0){
        arr.push(i**2)
    }
}
console.log(arr)

// 입력: N = 5
// 출력: [4, 16]
// 입력: N = 10
// 출력: [4, 16, 36, 64, 100]
//
// 정수 N을 입력받아, N 이하의 숫자 중에서 짝수만을 제곱하여 리스트를 만들어 반환하는 함수를 정의하시오.