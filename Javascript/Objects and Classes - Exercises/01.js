function solve(input){
    let employeeNumer = {}

    for (let line of input) {
        id = line.length
        employeeNumer[line] = id
    }

    for (let key in employeeNumer) {
        console.log(`Name: ${key} -- Personal Number: ${employeeNumer[key]}`)
    }
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )