function solve(number,input){
    let arr = input.slice(0,number).reverse()
    console.log(arr.join(" "))
}


solve(3, [10,20,30,40])