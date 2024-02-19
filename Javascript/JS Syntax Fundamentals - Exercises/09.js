function solve(fruitName, fruitWeight, fruitPrice){

    let fruitWeightKg = (fruitWeight / 1000)
    let totalPrice = (fruitWeightKg * fruitPrice).toFixed(2)
    console.log(`I need $${totalPrice} to buy ${fruitWeightKg.toFixed(2)} kilograms ${fruitName}.`)
}
solve('apple', 1563, 2.35)