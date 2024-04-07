function solve(input){
    encoded_message = input[0]


    for (let i = 1; i < input.length; i++){
        if (input[i] === "TakeEven"){
            encoded_message = encoded_message.split('').filter((_, index) => index % 2 === 0).join('')
            console.log(encoded_message)
            
        }else if (input[i].includes("ChangeAll?")){
            subRep = input[i].split('?')
           
            encoded_message = encoded_message.split(subRep[1]).join(subRep[2])
            console.log(encoded_message)
           

        }else if (input[i].includes("Reverse?")){
            rev = input[i].split('?')
            if (encoded_message.includes(rev[1])){
                encoded_message = encoded_message.replace(rev[1],'')
                encoded_message += rev[1].split('').reverse().join('')
                console.log(encoded_message)
            }else{
                console.log("error")
            }
        }else if (input[i] === "Buy"){
            console.log(`The cryptocurrency is: ${encoded_message}`)
            break
        }
    }
}


solve((["PZDfA2PkAsakhnefZ7aZ", 
"TakeEven",
"TakeEven",
"TakeEven",
"ChangeAll?Z?X",
"ChangeAll?m?g",
"ChangeAll?A?R",
"Reverse?PRX",
"Buy"])
)