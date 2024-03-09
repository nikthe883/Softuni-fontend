function solve(first, second){
    numOne = first.charCodeAt(0)
    numTwo = second.charCodeAt(0)
    result = ''

    if(numOne < numTwo){
        for (let i=numOne + 1; i<numTwo; i++){
            result += String.fromCharCode(i) + ' '
        }
    
    }else{
        for (let i=numTwo + 1; i<numOne; i++){
            result += String.fromCharCode(i) + ' '
        }
        
    }
    console.log(result)
}


solve('#', ':')