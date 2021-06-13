const express = require('express')
const bp = require('body-parser');
const app = express()

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

let todo = []
todo.push({ "id": 1, "task": "homework", })
todo.push({ "id": 2, "task": "cleaning" })
let done = []

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/index.html');
})

app.get("/todo", (req, res) => {
  //to do list
  res.json(todo)
})

app.post("/todo", (req, res) => {
  //add a task to the to-do list
  todo.push(req.body)
  res.status(201).send("ok")
})

app.delete("/todo/:id", (req, res) => {
  //delete a task from your to-do list
  for (let i = 0; i < todo.length; i++) {
    if (todo[i].id == req.params.id) {
      done.push(todo[i]);
      todo.splice(i, i+1);
    }
  }
  res.status(201).send("ok")
})

app.get("/done", (req, res) => {
  //list of finished tasks
  res.json(done)
})

app.listen(8080, () => console.log('Server ready'))