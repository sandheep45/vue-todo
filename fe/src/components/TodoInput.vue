<script setup lang="ts">
import { inject, ref } from "vue";

let todo = ref("");

const addTodo = inject<(todo: string) => void>("addTodo");

const handleSubmit = async () => {
  const res = await fetch("http://localhost:3000/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ todo: todo.value }),
  });

  const data = await res.json();
  console.log(data);
  addTodo && addTodo(todo.value);
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <label for="todo">Enter todo</label>
    <input id="todo" type="input" v-model="todo" />

    <button>Submit</button>
  </form>
</template>
