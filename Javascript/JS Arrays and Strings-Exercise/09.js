function solve(input){
    let pass = input[0].split('').reverse().join(''); 


    for (let i=1; i<input.length + 1; i++){

        if (input[i] === pass){
            console.log(`User ${input[0]} logged in.`)
            break

        }else if (i === 4){
            console.log(`User ${input[0]} blocked!`)
            break
        }else{
            console.log("Incorrect password. Try again.")
        }
    }

    }


solve(['Acer','login','go','let me in','recA']
)