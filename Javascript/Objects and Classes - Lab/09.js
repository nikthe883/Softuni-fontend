function solve(arr){
    let songs = []
    typeL = arr.pop()
    
    numSongs = arr.shift()

    
    class Song{
        constructor(type, name, length){
            this.type = type
            this.name = name
            this.length = length
        }
        get_name(){
           
            if (this.type === typeL){
                console.log(this.name)
            }
            if (typeL === 'all'){
                console.log(this.name)
            }
 
        }
    }

    for (var i=0; i<numSongs; i++){
  
        let type, songName, length
        [type, songName, length] = arr[i].split('_')
     
        songs.push(new Song(type, songName, length))
    }

    for (let i=0; i<songs.length; i++){
        songs[i].get_name()
    }

}

solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    
    )