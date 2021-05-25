
const log =(req,res,next)=>{
    console.log("ik log iets")
    next()
}

module.exports = { log }