<script setup lang="ts">
import { onMounted, provide, ref } from "vue";
import TodoInput from "./components/TodoInput.vue";

let todos = ref<string[]>([]);

const addTodo = (todo: string) => {
  todos.value.push(todo);
};

provide("addTodo", addTodo);

onMounted(async () => {
  const res = await fetch("http://localhost:3000/");
  const data = await res.json();

  todos.value = [...(data.todos as string[])];
});
</script>

<template>
  <h1>Todo app</h1>
  <TodoInput />

  <ul>
    <li v-for="todo in todos" :key="todo">{{ todo }}</li>
  </ul>
</template>
