const express = require('express')
const bp = require('body-parser');
const app = express()
const spelers = require("./routes/spelers")

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

app.use("/spelers",spelers)

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/www/index.html")
})

app.listen(8080, () => console.log('Server ready'))