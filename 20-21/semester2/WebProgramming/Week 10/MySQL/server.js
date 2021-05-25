const express = require("express")
const bp = require("body-parser")
const mysql = require("mysql")
const app = express()

app.use(bp.urlencoded({extended:false}))
app.use(bp.json())

const pool = mysql.createPool({
    connectionLimit:10,
    host:"localhost",
    user:"root",
    password:"",
    database:"ekvoetbal"
})

app.get("/ploegen",(req,res)=>{
    
    pool.getConnection( (err,connection)=>{

        if(err)
            throw err

            connection.query("select * from ploegen", (err, rows)=>{
                connection.release()
                if(err)
                    console.log(err)
                else
                    res.send(rows)
            })
    })
})

app.post("/ploegen",(req,res)=>{
    
    //parse de body
    const nieuwePloeg = req.body.naam
    console.log(nieuwePloeg)

    pool.getConnection( (err,connection)=>{

        if(err)
            throw err

            connection.query(`insert into ploegen(naam) values("${nieuwePloeg}")`, (err, rows)=>{
                connection.release()
                if(err)
                    console.log(err)
                else
                    res.send(rows)
            })
    })
})

app.put("/ploegen",(req,res)=>{
    
    //parse de body
    const updatedTeam = req.body
    console.log(updatedTeam)

    pool.getConnection( (err,connection)=>{

        if(err)
            throw err

            connection.query(`update ploegen set naam="${updatedTeam.naam}" where id=${updatedTeam.id}`, (err, rows)=>{
                connection.release()
                if(err)
                    console.log(err)
                else
                    res.send(rows)
            })
    })
})

app.get("/ploegen/:id",(req,res)=>{
    
    pool.getConnection( (err,connection)=>{

        if(err)
            throw err

            connection.query(`select * from ploegen where id = ${req.params.id}`, (err, rows)=>{
                connection.release()
                if(err)
                    console.log(err)
                else
                    res.send(rows)
            })
    })
})

app.delete("/ploegen/:id",(req,res)=>{
    
    pool.getConnection( (err,connection)=>{

        if(err)
            throw err

            connection.query(`delete from ploegen where id = ${req.params.id}`, (err, rows)=>{
                connection.release()
                if(err)
                    console.log(err)
                else
                    res.send(rows)
            })
    })
})


app.listen(3000, err=>{
    if(err)
        console.log(err)
    console.log("Running #3000")
})