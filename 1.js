const arr = [1,2,3,4,5,6,7,8]

const arr2  =[]

for (let i = 0;    i < arr.length; i++) {
    arr[i]%2 ===0 ? arr2.push(i) : null
}


console.log(arr2)



const arr3 = ['1','2','3','4','5','6','7','8']

const intArr = arr3.map((i)=>Number(i))
console.log([...intArr])

const strArr = '1234'
const intArr2 = strArr.split('').map((i)=>Number(i))
console.log([...intArr2])

const [n,m]= [1,4]
console.log(n,m)