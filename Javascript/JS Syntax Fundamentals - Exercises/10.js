function solve(number) {
    let digitList = String(number).split('').map(Number);
    console.log(digitList .every(value => value === digitList [0]))
    console.log(digitList.reduce((accumulator, currentValue) => accumulator + currentValue, 0))
}
solve(1234)