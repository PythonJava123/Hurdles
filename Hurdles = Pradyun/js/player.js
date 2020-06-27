class Player {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
      this.rank = null;

    }

    getRank(){

      var playerRankREF = database.ref('rank');
      playerRankREF.on("value", (data)=>{

        this.rank = data.val();

      })

    }

    static updateRank(rank){
      database.ref('/').update({
        rank: rank
      })
    }
  
    getCount(){

      var playerCountRef = dataBase.ref('playerCount');

      playerCountRef.on("value",(data)=>{

        playerCount = data.val();

      })

    }
  
    updateCount(count){

      dataBase.ref('/').update({

        playerCount: count

      });

    }
  
    update(){

      var playerIndex = "players/player" + this.index;

      dataBase.ref(playerIndex).set({

        name:this.name,

        distance:this.distance

      });

    }
  
    static getPlayerInfo(){

      var playerInfoRef = dataBase.ref('players');

      playerInfoRef.on("value",(data)=>{

        allAthletes = data.val();

      })

    }

  }