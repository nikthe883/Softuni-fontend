function solve(input){
    for (let i = 0; i <input.length; i++){
        objCity = {}
        let city, lat, long
        [city, lat, long] = input[i].split(' | ')
      
        objCity['town'] = city
        objCity['latitde'] = Number(lat).toFixed(2)
        objCity['longitude'] = Number(long).toFixed(2)
        console.log(objCity)
    }
}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)