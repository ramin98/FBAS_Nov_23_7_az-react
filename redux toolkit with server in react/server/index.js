const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

function generateRandomId(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

let todoList = [];
let completedList = [];

app.get("/todoList", async (req, res) => {
  try {
    res.json(todoList);
  } catch (error) {
    res.status(500).json({ text: "error" });
  }
});

app.get("/completedList", async (req, res) => {
  try {
    res.json(completedList);
  } catch (error) {
    res.status(500).json({ text: "error" });
  }
});

app.post("/add-todoList", async (req, res) => {
    console.log(req.body)
  try {
    let obj = req.body;
    obj.id = generateRandomId(8);
    todoList.push(obj);
    res.json({ text: `todo ${obj.todo} was added`, id: obj.id });
  } catch (error) {
    res.status(500).json({ text: "error" });
  }
});

app.post("/add-completedList", async (req, res) => {
  try {
    let obj = req.body;

    if(completedList.length >= 10){
        completedList.shift()
        console.log(completedList.length)
    }
    completedList.push(obj);
    res.json({ text: `todo ${obj.todo} was complete` });
  } catch (error) {
    res.status(500).json({ text: "error" });
  }
});

app.delete("/delete-todoList/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let item = todoList.find((item) => id === item.id);
    if (item) {
      todoList = todoList.filter((item) => id !== item.id);
      res.json({ text: `todo ${item.todo} was deleted` });
    } else {
      res.status(404).json({ text: "todo is not exist" });
    }
  } catch (error) {
    res.status(500).json({ text: "error" });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
