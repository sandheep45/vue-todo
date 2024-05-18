<script setup lang="ts">
import { toRefs } from "vue";

const props = defineProps<{
  todo: string;
  index: number;
  updateTodo: (todo: string, index: number) => void | null;
  deleteTodo: (index: number) => Promise<void>;
}>();

const { todo, index, updateTodo, deleteTodo } = toRefs(props);
</script>

<template>
  <li>
    <span>
      {{ todo }}
    </span>
    <button @click="updateTodo(todo, index)">Update</button>
    <button @click="deleteTodo(index)">Delete</button>
  </li>
</template>
