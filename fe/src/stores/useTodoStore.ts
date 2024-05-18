import { defineStore } from "pinia";
import { ref } from "vue";

const useTodoStore = defineStore("todo", () => {
  const todo = ref("");
  const updateIndex = ref<number | null>(null);

  const addTodo = (newTodo: string) => {
    console.log(newTodo);

    todo.value = newTodo;
  };

  return { todo, addTodo, updateIndex };
});

export default useTodoStore;
