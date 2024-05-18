<script setup lang="ts">
import { toRefs } from "vue";
import useTodoStore from "../stores/useTodoStore";
import useTodosStore from "../stores/useTodosStore";

const todoStore = useTodoStore();
const { addTodo, updateTodo } = useTodosStore();

const { todo, updateIndex } = toRefs(todoStore);

const handleSubmit = () => {
  if (updateIndex.value) {
    updateTodo(todo.value, updateIndex.value);
  } else {
    (async () => {
      await addTodo(todo.value);
    })();
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <label for="todo">Enter todo</label>
    <input id="todo" type="input" v-model="todo" />

    <button>Submit</button>
  </form>
</template>
