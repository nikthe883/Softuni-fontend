function solve(GroupNumber, groupType, weekDay){
    let price = 0
    if(GroupNumber >= 100 && groupType === "Business"){
        GroupNumber -= 10
    }
    
    if (groupType === "Students"){
        if (weekDay === "Friday" ){
            price += 8.45 * GroupNumber
        }else if(weekDay === "Saturday"){
            price += 9.80 * GroupNumber
        }else if(weekDay === "Sunday"){
            price += 10.46 * GroupNumber
        }
    }else if(groupType === "Business"){
        if (weekDay === "Friday" ){
            price += 10.90 * GroupNumber
        }else if(weekDay === "Saturday"){
            price += 15.60 * GroupNumber
        }else if(weekDay === "Sunday"){
            price += 16 * GroupNumber
        }
    }else if(groupType === "Regular"){
        if (weekDay === "Friday" ){
            price += 15 * GroupNumber
        }else if(weekDay === "Saturday"){
            price += 20 * GroupNumber
        }else if(weekDay === "Sunday"){
            price += 22.50 * GroupNumber
        }
    }
   
    if (GroupNumber >= 30 && groupType === "Students"){
        price -= price * 0.15
    }else if(GroupNumber >= 10 && GroupNumber <= 20 && groupType === "Regular"){
        price -= price * 0.05
    }

    console.log(`Total price: ${price.toFixed(2)}` )
}

solve(40,
    "Regular",
    "Saturday"
    )