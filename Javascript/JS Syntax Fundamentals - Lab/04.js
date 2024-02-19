function solve(number){
    month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    
    if (number >= 1 && number <= month.length){
        console.log(month[number-1])
  
    }
    else{
        console.log("Error!")
    }
}
