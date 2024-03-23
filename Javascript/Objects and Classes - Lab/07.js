function solve(input){
    let nameAddress = {}

    for (let line of input){
        let [name, address] = line.split(':');
            nameAddress[name] = address
         }
         let sorted = Object.entries(nameAddress)
         sorted = sorted.sort((a, b) => a[0].localeCompare(b[0]))
         objSorted = Object.fromEntries(sorted)
         for (let k in objSorted){
            console.log(`${k} -> ${objSorted[k]}`)
         }

    }


    solve(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
   )