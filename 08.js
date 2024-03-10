function isPerfectNumber(number) {
    if (number <= 1) {
        console.log(`It is not so perfect!`);
    }
  
    let sum = 1; // Start with 1 as all numbers are divisible by 1
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        sum += i;
  
        // If the divisors are distinct, add the other divisor
        if (i !== number / i) {
          sum += number / i;
        }
      }
    }
  
    if(sum === number) {
        console.log(`We have a perfect number!`);
    } else {
        console.log(`It's not so perfect.`);
  }
}


  isPerfectNumber(6)
  isPerfectNumber(28)
  isPerfectNumber(1236498)