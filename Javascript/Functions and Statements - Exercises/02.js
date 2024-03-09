function solve(one,two,three){

    function sum(){
        num = one + two
        return num
    
    }
    
    function subtract(){
        return sum() - three
    }
    console.log(subtract())
}


solve(23,6,10)