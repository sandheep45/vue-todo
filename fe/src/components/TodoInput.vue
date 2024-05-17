<script setup lang="ts">
import useTodoStore from "../stores/useTodoStore";

const { todo } = useTodoStore();

const handleSubmit = async () => {
  console.log(todo);
  // const res = await fetch("http://localhost:3000/", {
  //   method: "POST",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ todo: todo }),
  // });
  //
  // const data = await res.json();
  // console.log(data);
  // addTodo(todo);
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <label for="todo">Enter todo</label>
    <input
      id="todo"
      type="input"
      @input="todo = ($event.target as HTMLInputElement).value"
      :value="todo"
    />

    <button>Submit</button>
  </form>
</template>
