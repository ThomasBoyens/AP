const express = require('express')
let router = express.Router()
const mysql = require("mysql")

const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "",
    database: "reis"
})

router.route("/")
    .get((req, res) => {
        pool.getConnection((err, connection) => {

            if (err)
                throw err

            connection.query("select * from trips", (err, rows) => {
                connection.release()
                if (err)
                    console.log(err)
                else
                    res.send(rows)
            })
        })
    })

    .post((req, res) => {
        //parse de body
        const nieuweTrip = req.body.naam
        console.log(nieuweTrip)

        pool.getConnection((err, connection) => {

            if (err)
                throw err

            connection.query(`insert into trips(naam) values("${nieuweTrip}")`, (err, rows) => {
                connection.release()
                if (err)
                    console.log(err)
                else
                    res.send(rows)
            })
        })
    })


router.route("/:id")
    .get((req, res) => {

        pool.getConnection((err, connection) => {

            if (err)
                throw err

            connection.query(`select * from trips where id = ${req.params.id}`, (err, rows) => {
                connection.release()
                if (err)
                    console.log(err)
                else
                    res.send(rows)
            })
        })
    })


module.exports = router