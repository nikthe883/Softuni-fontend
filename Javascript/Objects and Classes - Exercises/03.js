function solve(input,add){
    let store = {}
    for(let i=0; i<input.length; i+=2){
        let poduct = input[i]
        let quantity = Number(input[i+1])

        if(!store.hasOwnProperty(poduct)){
            store[poduct] = quantity
        }else{
            store[poduct] += quantity
        }
    }
    for(let i=0; i<add.length; i+=2){
        let poduct = add[i]
        let quantity = Number(add[i+1])

        if(!store.hasOwnProperty(poduct)){
            store[poduct] = quantity
        }else{
            store[poduct] += quantity
        }
    }
    for(let key in store){
        console.log(`${key} -> ${store[key]}`)
    }

}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )

