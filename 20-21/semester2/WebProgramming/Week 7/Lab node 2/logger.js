class Logger{

    warning(bericht){
        console.log("WARNING: " + bericht)
    }

    info(bericht){
        console.log("INFO: " + bericht)
    }

    error(bericht){
        console.log("ERROR: " + bericht)
    }
}

module.exports = Logger