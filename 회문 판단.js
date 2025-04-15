const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input1.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(line => line.trim());

// abba
// summuus
// comwwmoc
// comwwtmoc


const checker = (arr)=>{
    // 재귀 함수 끝내는 경우
    // 1. 틀린 경우
    // 2. 서로 체크할게 없는 경우 -> arr.length 1인 경우
    if( arr[0] !== arr[arr.length-1]){
        console.log(false)
        return;
    }
    if(arr.length === 1 || arr.length === 0 ){
        console.log(true)
        return;
    }
    if(arr[0] === arr[arr.length-1]){
            arr.pop()
            arr.shift()
            checker(arr)
    }
}


checker(input[0].split(''))
