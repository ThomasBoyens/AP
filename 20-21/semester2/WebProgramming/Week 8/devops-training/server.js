const express = require('express')
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let trips = [{'id':0, 'costs':[20, 5, 2]}, {'id':1, 'costs':[8, 5, 67]}]

app.get('/', (req,res)=> {
  res.sendFile(__dirname + '/client/index.html');
})

app.post("/trips",(req,res)=>{
  const trip = req.body

  console.log(trip)
  trips.push(trip)

  res.send("Trip has been added to the database")
})

app.post("/trips/:tripid",(req,res)=>{

  console.log("POST request")
  //code maken om die data in een database te bewaren
  res.send("hang een opgedane kost aan een bepaalde reis")
})

app.get("/trips",(req,res)=>{

  //list of all trips
  res.json(trips)
})

app.get("/kosten",(req,res)=>{

  console.log("GET request")
  //console.log(req)
  res.send("Totaal bedrag van alle kosten")
})

app.get("/trips/:tripid",(req,res)=>{

  console.log("GET request")
  //code maken om die data in een database te bewaren
  res.send("Totale kost van een bepaalde reis")
})

app.listen(8080, () => console.log('Server ready'))
