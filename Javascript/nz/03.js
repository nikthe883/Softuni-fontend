function solve(input){
    let obj = JSON.parse(input);
    for([key, value] of Object.entries(obj)){
        console.log(`${key}: ${value}`)
    }
}

solve('{"name": "George", "age": 40, "town": "Sofia"}')