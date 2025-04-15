const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input1.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(line => line.trim());

let target = Number(input.shift())
let arr = ''
const converter = (target)=>{
    if(target < 0 || target === 0){
        console.log(arr)
        return ;
    }else{
        arr= target%2 + arr
        target = Math.floor(target/2)
    }
    converter(target)
}

converter(target)



