const express = require('express')
const weerservice = require('../Service/WeerService')
let router = express.Router()

router.route("/")
    .get((req, res) => {
        res.send(weerservice)
    })


router.route("/:id")
    .get((req, res) => {
        for (let i = 0; i < weerservice.length; i++) {
            if (weerservice[i].id == req.params.id) {
                if (req.params.id > weerservice.length) {
                    res.send("Voorspelling niet beschikbaar")
                }
                else {
                    let output = weerservice.splice(0, req.params.id)
                    res.send(output)
                }
            }
        }
    })

module.exports = router