function solve(text){
    text.split(" ").forEach((element) =>{
       
        if (element[0] === "#" && (/^[#a-zA-Z]+$/).test(element) === true && element.length > 1){
            console.log(element.slice(1,element.length))
        }
    })
}


solve('Nowadays everyone uses # to tag a #special word in #socialMedia')