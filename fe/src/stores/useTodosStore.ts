import { ref, toRefs, watch } from "vue";
import useTodoStore from "./useTodoStore";

const useTodosStore = () => {
  const todoStore = useTodoStore();
  const todos = ref<string[]>([]);

  const { todo, updateIndex } = toRefs(todoStore);

  watch(todos.value, () => {
    console.log("updated", todos.value);
  });

  const getAllTodos = async () => {
    const res = await fetch("http://localhost:3000/");
    const data = await res.json();

    todos.value = [...(data.todos as string[])];
  };

  const addTodo = async (todo: string) => {
    const res = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todo }),
    });

    const data = await res.json();
    console.log(data);

    todos.value.push(todo);
  };

  const updateTodo = (todoValue: string, index: number) => {
    console.log(updateIndex.value);
    if (!updateIndex.value) {
      todo.value = todoValue;
      updateIndex.value = index;
    } else {
      (async () => {
        const res = await fetch(`http://localhost:3000/${index}`, {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ todo: todoValue }),
        });

        const data = await res.json();
        console.log(data);

        todos.value = todos.value.map((todo, idx) =>
          index === idx ? todoValue : todo,
        );

        updateIndex.value = null;
      })();
    }
  };

  const removeTodo = async (idx: number) => {
    const data = await fetch(`http://localhost:3000/${idx}`, {
      method: "DELETE",
    }).then((res) => res.json());
    console.log(data);

    todos.value = todos.value.filter((_todo, index) => index !== idx);
  };

  return { todos, updateTodo, removeTodo, addTodo, getAllTodos };
};

export default useTodosStore;
