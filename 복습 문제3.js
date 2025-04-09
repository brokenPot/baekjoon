const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input1.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const name  = input[0]

console.log(name.split('').map((i)=> i==='e' ? 'ee':i).join(''))
// new_name_list = [# TODO]
// new_name = ''.join(new_name_list)
// print(new_name)

// 입력: name = 'Heybob'
// 출력: 'Heeybob'
//
// 리스트 컴프리헨션을 이용하여, 알파벳으로 된 이름의 특정 문자(e)만 2개로 늘려서 변형시키는 코드를 작성해 봅시다!