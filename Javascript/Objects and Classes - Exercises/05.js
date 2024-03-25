function solve(input){
    obj = []

    for (let i = 0; i < input.length; i++){
        let name, lvl, items
        [name, lvl, items] = input[i].split(' / ')
        obj.push({
        'name' : name,
        'lvl' : Number(lvl),
        'items' : items}
        )
        
    }
    obj
    .sort((a, b) => (a.lvl - b.lvl))
    .map((obj) => {
        console.log(`Hero: ${obj.name}`);
        console.log(`level => ${obj.lvl}`);
        console.log(`items => ${obj.items}`);
    })
   
}


solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )