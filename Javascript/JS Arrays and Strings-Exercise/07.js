function solve(word,text){
    let check = text.toLowerCase().includes(word.toLowerCase())
    if (check === true){
        console.log(word)
        
    }else{
        console.log(`${word} not found!`)
    }
}


solve('javascript', 'JaVascript is the worst language I have seen')
solve('Python', "There is no word here to match this language")