<script setup lang="ts">
useHead({
  title: "About us page",
});

const layout = "about-us";

const res = await useFetch("/api/v1/test", {
  method: "POST",
  body: {
    test: 123455,
  },
});

const data = await $fetch("/api/v1/hello");
</script>

<template>
  <NuxtLayout :name="layout">
    <div>About us page test</div>
    <div>{{ res.data }}</div>
    <div>{{ data }}</div>
  </NuxtLayout>
</template>
