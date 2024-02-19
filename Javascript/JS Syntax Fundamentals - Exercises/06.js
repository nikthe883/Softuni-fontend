function solve(num){
    let total = 0
    String(num).split("").forEach(element => {
        total += parseInt(element, 10);
    });
    console.log(total)
}