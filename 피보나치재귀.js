// 100이전까지
// [1,1]

const fibonacci = (arr)=>{
    if(arr[arr.length-1]>56){
        console.log(arr)
        return;
    }else{
        arr.splice(arr.length, 0, arr[arr.length-1]+arr[arr.length-2]);
    }
    fibonacci(arr)
}

fibonacci([1,1])

// n이 주어졌을 때, n번째 피보나치 수를 구하는 프로그램을 작성하시오.
// 첫째 줄에 n이 주어진다. n은 45보다 작거나 같은 자연수이다.
// 첫째 줄에 n번째 피보나치 수를 출력한다.