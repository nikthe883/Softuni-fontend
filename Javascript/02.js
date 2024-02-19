function solve(string){
    wordsArr = string.match(/\b\w+\b/g)
    console.log(wordsArr.map(word => word.toUpperCase()).join(', '))
}
solve("Hello world")