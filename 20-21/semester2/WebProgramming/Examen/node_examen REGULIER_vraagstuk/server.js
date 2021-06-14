const express = require('express')
const app = express()
const bp = require("body-parser")
const weerroute = require("./Routes/weersvoorspelling")

app.use(bp.urlencoded({ extended:false}))
app.use(bp.json())
app.use("/weersvoorspelling",weerroute)


app.listen(process.env.PORT || 3000, () => console.log('server ready'))