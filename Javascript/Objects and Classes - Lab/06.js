function solve(input){
    let meetings= {}

    for (let line of input){
        let [weekdays, names] = line.split(' ');
         if (meetings.hasOwnProperty(weekdays)){
            console.log(`Conflict on ${weekdays}!`)
         }else{
            meetings[weekdays] = names
            console.log(`Scheduled for ${weekdays}`)
         }
        
         }

         for (let k in meetings){
            console.log(`${k} -> ${meetings[k]}`)
         }

    }
