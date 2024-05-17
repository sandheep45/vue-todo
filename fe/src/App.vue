<script setup lang="ts">
import { onMounted, provide, ref } from "vue";
import TodoInput from "./components/TodoInput.vue";
import TodoItem from "./components/TodoItem.vue";

const todos = ref<string[]>([]);
const updateIndex = ref<number | null>(null);

const addTodo = (todo: string) => {
  todos.value.push(todo);
};

provide("addTodo", addTodo);

onMounted(async () => {
  const res = await fetch("http://localhost:3000/");
  const data = await res.json();

  todos.value = [...(data.todos as string[])];
});

const updateTodo = (index: number) => {
  updateIndex.value = index;
};

const removeTodo = async (index: number) => {
  const data = await fetch(`http://localhost:3000/${index}`, {
    method: "DELETE",
  }).then((res) => res.json());
  console.log(data);
  todos.value = todos.value.filter((_todo, idx) => idx !== index);
};
</script>

<template>
  <h1>Todo app</h1>
  <TodoInput />

  <ul>
    <TodoItem
      v-for="(todo, index) in todos"
      :todo="todo"
      :index="index"
      :updateTodo="updateTodo"
      :delete-todo="removeTodo"
    />
  </ul>
</template>
