const express = require('express')
let router = express.Router()
const mysql = require("mysql")

const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "",
    database: "tennis"
})

router.route("/")
    .get((req, res) => {
        pool.getConnection((err, connection) => {

            if (err)
                throw err

            connection.query("select * from spelers", (err, rows) => {
                connection.release()
                if (err)
                    console.log(err)
                else
                    res.send(rows)
            })
        })
    })

router.route("/:SPELERSNR")
    .get((req, res) => {

        pool.getConnection((err, connection) => {

            if (err)
                throw err

            connection.query(`select * from spelers where SPELERSNR = ${req.params.SPELERSNR}`, (err, rows) => {
                connection.release()
                if (err)
                    console.log(err)
                else
                    res.send(rows)
            })
        })
    })

module.exports = router