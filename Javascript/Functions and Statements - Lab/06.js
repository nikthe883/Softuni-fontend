function solve(numOne,numTwo,numThree){
    let sum = 0
    if (Math.sign(numOne) == -1){
        sum += 1
    }
    
    if (Math.sign(numTwo) == -1){
        sum += 1
    }
    
    if (Math.sign(numThree) == -1){
        sum += 1
    }
   
    
    
    if (sum === 3 || sum === 1){
        console.log("Negative")

    }
    else{
        console.log("Positive")
    }
    
}

solve(5,12,-15)
solve(-6,-12,14)
solve(-1,-2,-3)