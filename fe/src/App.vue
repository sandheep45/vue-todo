<script setup lang="ts">
import { onMounted, toRefs } from "vue";
import TodoInput from "./components/TodoInput.vue";
import TodoItem from "./components/TodoItem.vue";
import useTodosStore from "./stores/useTodosStore";
import useTodoStore from "./stores/useTodoStore";

const todosStore = useTodosStore();
const todoStore = useTodoStore();

const { updateTodo, removeTodo, getAllTodos } = todosStore;

const { todos } = toRefs(todosStore);
const { updateIndex } = toRefs(todoStore);

const handleUpdateTodo = (todo: string, index: number) => {
  if (updateIndex.value) {
    return null;
  }

  return updateTodo(todo, index);
};

onMounted(async () => {
  await getAllTodos();
});
</script>

<template>
  <h1>Todo app</h1>
  <TodoInput />

  <ul>
    <TodoItem
      v-for="(todo, index) in todos"
      :key="index"
      :todo="todo"
      :index="index"
      :updateTodo="handleUpdateTodo"
      :delete-todo="removeTodo"
    />
  </ul>
</template>
