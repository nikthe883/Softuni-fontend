function solve(numberArg,...listArg){
    let intNumberArg = Number(numberArg)
    
    for (let i=0; i <= listArg.length; i++){
        if(listArg[i] === 'chop'){
            intNumberArg /= 2
            console.log(intNumberArg)
        }else if(listArg[i] === 'dice'){
            intNumberArg = Math.sqrt(intNumberArg)
            console.log(intNumberArg)
        }
        else if(listArg[i] === 'spice'){
            intNumberArg += 1
            console.log(intNumberArg)
        }
        else if(listArg[i] === 'bake'){
            intNumberArg *= 3
            console.log(intNumberArg)
        }
        else if(listArg[i] === 'fillet'){
            intNumberArg -= intNumberArg * 0.2
            console.log(intNumberArg)
        }
    }
}
solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')