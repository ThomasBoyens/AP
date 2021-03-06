const express = require('express')
const bp = require('body-parser');
const app = express()
const trips = require("./routes/trips")

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

app.use("/trips",trips)

app.listen(8080, () => console.log('Server ready'))