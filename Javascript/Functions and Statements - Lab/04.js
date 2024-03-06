function solve(item, amount){

    if (item === 'coffee'){
        console.log(`${(1.5 * amount).toFixed(2)}`)
    }else if (item === 'water'){
        
        console.log(`${(1 * amount).toFixed(2)}`)
    }else if (item === 'coke'){

        console.log(`${(1.4 * amount).toFixed(2)}`)
    }else if (item === 'snacks'){

        console.log(`${(2 * amount).toFixed(2)}`)
    }

}

solve('water',5)
solve('coffee',2)