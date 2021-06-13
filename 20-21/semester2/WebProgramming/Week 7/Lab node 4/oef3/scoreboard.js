class Scoreboard{

    constructor(user,score,aantal){
        this.score = score;
        this.aantal = aantal;
        this.user = user;
      
    }

    Print(){
        console.log("Beste " + this.user._voornaam + ", je behaalde : " + this.score + " / " + this.aantal);
    }
}

module.exports = Scoreboard;