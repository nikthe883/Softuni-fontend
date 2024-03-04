function solve(arr, n){
    let nerArr = []
    for( let i=0; i<arr.length; i+=n){
      
        nerArr.push(arr[i])
    }
    return(nerArr)

}

solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
)