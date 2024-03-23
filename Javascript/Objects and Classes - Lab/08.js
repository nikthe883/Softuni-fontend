function solve(arr){

    let cats = []

    class Cat{
        constructor(name, age){
            this.name = name
            this.age = age
    }
    speak(){
        console.log(`${this.name}, age ${this.age} says Meow`)
    }
}

    for (let i = 0; i < arr.length; i++){
        let data = arr[i].split(' ')
   
        let name, age
        [name, age] = [data[0], data[1]]
        
        cats.push(new Cat(name, age))
    }
    for (let i = 0; i < cats.length; i++){
        cats[i].speak()
    }

}

solve(['Tom 1', 'Tom 2', 'Tom 3'])