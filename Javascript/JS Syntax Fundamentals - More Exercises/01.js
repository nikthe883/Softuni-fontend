function solve(x1,y1,x2,y2){
    for(let i = 0; i <= 2; i++){
        if(i == 0){
            let result = Math.sqrt(Math.pow((0 - x1),2) + Math.pow((0-y1),2))
            if (Number. isInteger(result)){
                console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
            }else{
                console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
            }
        }else if(i == 1){
            let result = Math.sqrt(Math.pow((x2 - 0),2) + Math.pow((y2-0),2))
            if (Number. isInteger(result)){
                console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
            }else{
                console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
            }
        }else{
            let result = Math.sqrt(Math.pow((x2 - x1),2) + Math.pow((y2-y1),2))
            if (Number. isInteger(result)){
                console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
            }else{
                console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
            }
        }
    } 
}
solve(3, 0, 0, 4)