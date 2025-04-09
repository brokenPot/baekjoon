const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input1.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(line => line.trim());

for (let i = 0; i<input.length; i++){
    if(input[i]==='#'){
        break;
    }else{
        let count=0
        input[i].toLowerCase().split('').map((x)=>{
            if(x==='a' || x==='e' || x==='i' || x==='o' || x==='u' )
                count+=1
        })
        console.log(count)
    }
}


// const data  = input
// console.log(data)

// 입력은 여러 개의 테스트 케이스로 이루어져 있으며, 각 줄마다 영어 대소문자, ',', '.', '!', '?', 
// 공백으로 이루어진 문장이 주어진다. 각 줄은 최대 255글자로 이루어져 있다.
// 입력의 끝에는 한 줄에 '#' 한 글자만이 주어진다.