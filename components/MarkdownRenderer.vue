<template>
  <div v-html="compiledMarkdown" class="markdown-content"></div>
</template>

<script setup>
import { ref, watch } from "vue";
import { marked } from "marked";

const props = defineProps({
  content: {
    type: String,
    required: true,
  },
});

const compiledMarkdown = ref("");

watch(
  () => props.content,
  (newContent) => {
    compiledMarkdown.value = marked(newContent);
  }
);
</script>

<style scoped>
.markdown-content {
  /* Add any styles you want for your Markdown rendering here */
}
</style>
