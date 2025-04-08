const my_input = '가희 38 D\n나희 77 B\n다희 51 C\n라희 91 A'



const temp = my_input.split('\n').map(item=>item.split(' '))

for (let i = 0 ; i<temp.length;i++){
    temp[i][1] = Number(temp[i][1])
}

console.log(temp)

// for (let i = 0 ; i<temp.length;i++){
//     temp[i] = {name:temp[i][0],score:Number(temp[i][1]), alphabet:temp[i][2]}
// }

console.log(temp.sort((a, b) => a[0].localeCompare(b[0])))
console.log(temp.sort((a, b) => b[1] - a[1] ))
console.log(temp.sort((a, b) => a[2].localeCompare(b[2])))
