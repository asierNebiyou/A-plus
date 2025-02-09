<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold text-primary">Blog Posts</h1>
    <div
      v-for="post in posts"
      :key="post.id"
      class="mt-4 p-4 border rounded-lg"
    >
      <h2 class="text-xl text-text">{{ post.title }}</h2>
      <p class="text-lg text-text">{{ post.content }}</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useFetch } from "#app";

const posts = ref([]);

onMounted(async () => {
  const { data } = await useFetch("/api/blog");
  posts.value = data.value;
});
</script>
