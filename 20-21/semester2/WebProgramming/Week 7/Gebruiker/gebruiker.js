class Gebruiker{

    constructor(naam,voornaam){
        this.voornaam = voornaam
        this.naam = naam
    }

    print(){
        console.log(this.voornaam + " " + this.naam)
    }
}

module.exports = Gebruiker