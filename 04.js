function solve(f,l,c){
    let obj = {name:f, lastName:l, hairColor:c};
    let str = JSON.stringify(obj);
    console.log(str);
}

solve('George', 'Jones', 'Brown')