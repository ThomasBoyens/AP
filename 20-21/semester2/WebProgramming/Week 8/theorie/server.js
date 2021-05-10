const express = require("express")

const app = express()

app.get("/",(req,res)=>{

    res.send("<h1>Hallo Thomas</h1>")
})

app.get("/old",(req,res)=>{

    res.redirect(301,"producten")
})

app.get("/producten",(req,res)=>{

    console.log("GET request")
    //console.log(req)
    res.send("Een lijst van producten")
})

app.post("/producten",(req,res)=>{

    console.log("POST request")
    //code maken om die data in een database te bewaren
    res.send("ik verwerk de toegestuurde producten")
})

app.listen(3000, err => {

    if(err)
        console.log(err)
    console.log("listening on port 3000")
})