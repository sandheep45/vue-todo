import { defineStore } from "pinia";
import { ref } from "vue";

const useTodoStore = defineStore("todo", () => {
  const todo = ref("");

  const addTodo = (newTodo: string) => {
    console.log(newTodo);

    todo.value = newTodo;
  };

  return { todo, addTodo };
});

export default useTodoStore;
