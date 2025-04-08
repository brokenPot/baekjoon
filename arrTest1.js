const my_input = '가희 38 D\n나희 77 B\n다희 51 C\n라희 91 A'

const arr_2D = ''


const temp = my_input.split('\n').map(item=>item.split(' '))


for (let i = 0 ; i<temp.length;i++){
    temp[i] = {name:temp[i][0],score:Number(temp[i][1]), alphabet:temp[i][2]}
}

console.log(temp.sort((a, b) => a.name.localeCompare(b.name)).map(obj=> Object.values(obj)))
console.log(temp.sort((a, b) => b.score - a.score ).map(obj=> Object.values(obj)))
console.log(temp.sort((a, b) => a.alphabet.localeCompare(b.alphabet)).map(obj=> Object.values(obj)))
