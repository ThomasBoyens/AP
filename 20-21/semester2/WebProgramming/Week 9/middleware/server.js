const express = require("express")
const {log} = require("./middleware")
const {log2} = require("./middleware2")
const app = express()

app.use(log)
app.use(log2)

app.get("/",(req,res)=>{
    res.send("root")
})

app.listen(3000, err=>{
    if(err)
        console.log(err)
    console.log("OK")
})