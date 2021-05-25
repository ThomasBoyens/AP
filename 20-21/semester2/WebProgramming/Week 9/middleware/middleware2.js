
const log2 =(req,res,next)=>{
    console.log("ik log iets van mijn tweede functie")
    next()
}

module.exports = { log2 }