const readline = require('readline-sync');

class Game{

    constructor(aantalSommen,getal)
    {
      
        this._aantalSommen = aantalSommen;
        this._getal = getal;
        this.sommen = [];
        this.antwoorden = [];
        this.score = 0;
    }

    get aantalSommen(){
        return this._aantalSommen;
    }
    set aantalSommen(value){
        this._aantalSommen = value;
    }

    get getal(){
        return this._getal;
    }
    set getal(value){
        this._getal = value;
    }

    CreateGame(){
        for (let i = 0; i < this.aantalSommen; i++) {
            this.sommen[i] = i + " + " + this.getal 
        }
    }

    PlayGame(){
        for (let i = 0; i < this.aantalSommen; i++) {
            this.antwoorden[i] = readline.question(this.sommen[i] + " = ")
        }
    }

    Evaluate(){
        for (let i = 0; i < this.aantalSommen; i++) {
            if (eval(this.sommen[i]) == this.antwoorden[i]) {
                this.score++;
            }
        }
    }
}

module.exports = Game;