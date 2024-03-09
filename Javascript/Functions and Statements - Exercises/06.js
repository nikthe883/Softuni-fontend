function solve(pass){
    function onlyLettersAndNumbers(pass) {
        return Boolean(pass.match(/^[A-Za-z0-9]*$/));
      }
    function numbersBetweenSixAndTen(pass){
        return Boolean(pass.length >= 6 && pass.length <= 10)
    }
    function AtLeastTwoDigits(pass){
        return Boolean((pass.match(/\d/g) || []).length >= 2)
    }
 
    if (onlyLettersAndNumbers(pass) && numbersBetweenSixAndTen(pass) && AtLeastTwoDigits(pass)){
        console.log('Password is valid')
    }
    if (!numbersBetweenSixAndTen(pass)){

        console.log('Password must be between 6 and 10 characters')
    }
    if (!onlyLettersAndNumbers(pass)){
        console.log("Password must consist only of letters and digits")
    }

    if (!AtLeastTwoDigits(pass)){
        console.log("Password must have at least 2 digits")
    }
}

solve('MyPass123')