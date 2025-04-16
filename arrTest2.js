function flatten(l) {
    if (!Array.isArray(l)) {
        return [l];
    }
    let res = [];
    for (let item of l) {
        res = res.concat(flatten(item));
    }
    return res;
}

// 사용 예시
let result = [];
result = flatten([1, [2, [3, 4], 5], 6]);
console.log(result); // [1, 2, 3, 4, 5, 6]
