function solve(arr){
    arr.sort((a, b) => a - b);
    let sortedArr = []
    
    while (arr.length > 0){
        sortedArr.push(arr.shift())
        sortedArr.push(arr.pop())
    }
    return sortedArr
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])