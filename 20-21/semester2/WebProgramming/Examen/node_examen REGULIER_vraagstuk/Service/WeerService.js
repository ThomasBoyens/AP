const WeerBericht = require("./WeerBericht")

const weerservice = []

//weersvoorspellingen
weerservice.push(new WeerBericht(25,"erg zonnige dag"))  // weerbericht vandaag
weerservice.push(new WeerBericht(22,"bewolking komt opzetten"))  // weerbericht morgen
weerservice.push(new WeerBericht(27,"zonnig met op het einde van onweer mogelijk"))  // weerbericht overmorgen
weerservice.push(new WeerBericht(29,"zwembad weertje!"))  // weerbericht dag na overmorgen

module.exports = weerservice