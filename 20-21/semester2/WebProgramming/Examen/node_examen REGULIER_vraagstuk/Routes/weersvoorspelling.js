const express = require('express')
const weerservice = require('../Service/WeerService')
let router = express.Router()

router.route("/")
    .get((req, res) => {
        res.send(weerservice)
    })


router.route("/:id")
    .get((req, res) => {
        if (req.params.id > weerservice.length) {
            res.send("Voorspelling niet beschikbaar")
        }
        else {
            let berichten = []
            for (let i = 0; i < req.params.id; i++) {
                berichten.push(weerservice[i])
            }
            res.send(berichten)
        }
    })

module.exports = router