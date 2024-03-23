function solve(input){
    if (input === 100){
        console.log('100% Complete!')
        console.log('[%%%%%%%%%%]')
    }else{
        let rest = 100 - input
        console.log(`${input}% [${"%".repeat(input/10)}${".".repeat(rest/10)}]`)
        console.log('Still loading...')
    }


}

solve(100)