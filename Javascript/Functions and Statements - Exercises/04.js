function solve(num){
    let numString = num.toString()
    let sumOdd = 0
    let sumEven = 0
    for (i=0;i<numString.length;i++){
        let strInt = parseInt(numString[i])
        if(strInt % 2 === 0){
            sumEven += strInt
        }else{
            sumOdd += strInt
        }

    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`)
}
solve(100435)
