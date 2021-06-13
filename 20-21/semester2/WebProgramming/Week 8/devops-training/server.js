const express = require('express')
const bodyParser = require('body-parser');
var fs = require('fs');
const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let trips = []
trips.push({ "id": 1, "naam":"Ardennen", "kosten": [] })
trips.push({ "id": 2, "naam":"Zee", "kosten": [] })

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/Client/j.html');
})

app.get("/trips", (req, res) => {

  //list of all trips
  res.json(trips)
})

app.get("/trips/:id", (req, res) => {
  let trip = undefined
  for (let i = 0; i < trips.length; i++) {
    if (trips[i].id == req.params.id)
      trip = trips[i]
  }
  res.send(trip)
})

app.post("/trips", (req, res) => {
  
  //ik geef een json object mee met de body : {id:1, kost:400}
  //1. ik ga op zoek naar de juiste trip

  for (let i = 0; i < trips.length; i++) {
    if (trips[i].id == req.body.id)
      {
        trips[i].kosten.push(req.body.kost)
        console.log(trips[i])
      }
  }
  res.status(201).send("ok")

})

app.get("/trips/kosten/:id", (req, res) => {

  let totaal = 0;
  for (let i = 0; i < trips.length; i++) {
    if (trips[i].id == req.params.id)
      {
        for (let j = 0; j < trips[i].kosten.length; j++) {
          totaal+= trips[i].kosten[j]
        }
        console.log("totaal prijs = " + totaal)
      }
  }
  res.send("totaal: " + totaal)
})


app.listen(8080, () => console.log('Server ready'))
