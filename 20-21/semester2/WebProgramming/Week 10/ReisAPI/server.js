const express = require('express')
const bp = require('body-parser');
const app = express()
const trips = require("./routes/trips")

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

app.use("/trips",trips)

app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/www/index.html')
})

app.get("/trips/kosten/:id", (req, res) => {

    let totaal = 0;
    for (let i = 0; i < trips.length; i++) {
        if (trips[i].id == req.params.id) {
            for (let j = 0; j < trips[i].kosten.length; j++) {
                totaal += trips[i].kosten[j]
            }
            console.log("totaal prijs = " + totaal)
        }
    }
    res.send("totaal: " + totaal)
})


app.listen(8080, () => console.log('Server ready'))