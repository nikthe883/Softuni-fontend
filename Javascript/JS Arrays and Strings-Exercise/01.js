 function solve(arr,n){
    for(i=0;i<n;i++){
        let fEl = arr.shift()
        arr.push(fEl)
 }
    console.log(arr.join(" "))
}

 solve([51, 47, 32, 61, 21], 2)