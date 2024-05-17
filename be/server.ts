import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const todos = ["todo1", "todo2", "todo3", "todo4"];

app.get("/", (req, res) => {
  return res.json({ todos });
});

app.post("/", (req, res) => {
  const todo = req.body;

  if (!todo) return res.status(400).json({ msg: "No todo found" });

  todos.push(todo.todo);

  return res.json({ body: req.body });
});

app.listen(3000, () => {
  console.log("Listeninig to port 3000");
});
