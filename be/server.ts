import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

let todos = ["todo1", "todo2", "todo3", "todo4", "todo5"];

app.get("/", (req, res) => {
  return res.json({ todos });
});

app.post("/", (req, res) => {
  const todo = req.body;

  if (!todo) return res.status(400).json({ msg: "No todo found" });

  todos.push(todo.todo);

  return res.json({ body: req.body });
});

app.patch("/:idx", (req, res) => {
  todos = todos.map((todo, index) =>
    index === +req.params.idx ? req.body.todo : todo,
  );

  return res.json({ msg: "Success" });
});

app.delete("/:idx", (req, res) => {
  const idx = +req.params.idx;
  todos = todos.filter((_todo, index) => index !== idx);

  return res.json({ msg: "Succcess" });
});

app.listen(3000, () => {
  console.log("Listeninig to port 3000");
});
