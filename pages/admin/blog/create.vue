<template>
  <div class="max-w-4xl mx-auto p-6">
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- Title -->
      <div>
        <label class="block text-sm font-medium text-gray-700">Title</label>
        <input
          v-model="postData.title"
          type="text"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>

      <!-- Slug -->
      <div>
        <label class="block text-sm font-medium text-gray-700">Slug</label>
        <input
          v-model="postData.slug"
          type="text"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>

      <!-- Tags -->
      <div>
        <label class="block text-sm font-medium text-gray-700">Tags</label>
        <div class="flex flex-wrap gap-2">
          <input
            v-model="tagInput"
            @keydown.enter.prevent="addTag"
            type="text"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Press enter to add tags"
          />
          <div class="flex flex-wrap gap-2 mt-2">
            <span
              v-for="tag in postData.tags"
              :key="tag"
              class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
            >
              {{ tag }}
              <button
                type="button"
                @click="removeTag(tag)"
                class="ml-1 inline-flex items-center p-0.5 rounded-full text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                ×
              </button>
            </span>
          </div>
        </div>
      </div>

      <!-- Markdown Editor -->
      <div>
        <label class="block text-sm font-medium text-gray-700">Content</label>
        <div class="mt-1 flex rounded-md shadow-sm">
          <div class="relative flex flex-1 flex-col">
            <!-- Editor Toolbar -->
            <div
              class="border-b border-gray-300 bg-gray-50 p-2 flex items-center space-x-2 rounded-t-md"
            >
              <button
                v-for="(action, index) in markdownActions"
                :key="index"
                @click.prevent="insertMarkdown(action.markdown)"
                type="button"
                class="p-1 hover:bg-gray-200 rounded"
              >
                {{ action.label }}
              </button>
            </div>

            <!-- Editor Area -->
            <textarea
              v-model="postData.content"
              rows="15"
              class="block w-full rounded-b-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              required
            ></textarea>
          </div>
        </div>
      </div>

      <!-- Preview -->
      <div
        v-if="showPreview"
        class="prose max-w-none mt-6 p-6 border rounded-md"
      >
        <div v-html="markdownPreview"></div>
      </div>

      <!-- Actions -->
      <div class="flex justify-between">
        <button
          type="button"
          @click="showPreview = !showPreview"
          class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          {{ showPreview ? "Hide Preview" : "Show Preview" }}
        </button>

        <div class="flex space-x-3">
          <button
            type="submit"
            :disabled="loading"
            class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {{ loading ? "Saving..." : "Save Post" }}
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { marked } from "marked";
import { useBlog } from "~/composables/useBlog";

const { createPost, loading } = useBlog();

const showPreview = ref(false);
const tagInput = ref("");

const postData = ref({
  title: "",
  slug: "",
  content: "",
  tags: [],
  status: "draft",
});

const markdownActions = [
  { label: "B", markdown: "**Bold**" },
  { label: "I", markdown: "*Italic*" },
  { label: "H2", markdown: "## Heading" },
  { label: "Link", markdown: "[Link](url)" },
  { label: "Image", markdown: "![Alt text](image-url)" },
  { label: "Code", markdown: "```\ncode\n```" },
  { label: "Quote", markdown: "> Quote" },
  { label: "List", markdown: "- List item" },
];

const markdownPreview = computed(() => {
  return marked(postData.value.content);
});

const insertMarkdown = (markdown) => {
  const textarea = document.querySelector("textarea");
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;

  postData.value.content =
    postData.value.content.substring(0, start) +
    markdown +
    postData.value.content.substring(end);

  textarea.focus();
};

const addTag = () => {
  if (tagInput.value.trim()) {
    postData.value.tags.push(tagInput.value.trim());
    tagInput.value = "";
  }
};

const removeTag = (tag) => {
  postData.value.tags = postData.value.tags.filter((t) => t !== tag);
};

const handleSubmit = async () => {
  try {
    await createPost(postData.value);
    // Handle successful submission (e.g., show notification, redirect)
  } catch (error) {
    // Handle error
    console.error(error);
  }
};
</script>
