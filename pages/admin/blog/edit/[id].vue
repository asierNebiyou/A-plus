<template>
  <NuxtLayout name="admin">
    <div class="min-h-screen bg-gray-50 p-6">
      <div class="max-w-3xl mx-auto">
        <div class="flex items-center mb-6">
          <button @click="router.back()" class="mr-4">
            <ArrowLeftIcon class="w-5 h-5 text-gray-600 hover:text-gray-800" />
          </button>
          <h1 class="text-2xl font-semibold text-gray-900">Edit Post</h1>
        </div>

        <div v-if="isLoading" class="text-center py-12">
          <div
            class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#92A75A] mx-auto"
          ></div>
        </div>

        <form
          v-else-if="form"
          @submit.prevent="handleSubmit"
          class="bg-white rounded-lg shadow-sm p-6"
        >
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Title</label
            >
            <input
              v-model="form.title"
              type="text"
              required
              class="w-full p-2.5 border border-gray-200 rounded-lg"
            />
          </div>

          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Content (Markdown)</label
            >
            <textarea
              v-model="form.content"
              rows="10"
              required
              class="w-full p-2.5 border border-gray-200 rounded-lg"
            ></textarea>
          </div>

          <button
            type="submit"
            class="bg-[#92A75A] text-white px-4 py-2 rounded-lg hover:bg-[#7a8c4c] transition-colors"
          >
            Update Post
          </button>
        </form>

        <!-- Render Markdown Content -->
        <h2 class="mt-6 text-xl font-semibold">Preview</h2>
        <MarkdownRenderer :content="form.content" />
      </div></div
  ></NuxtLayout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "nuxt/app";
import { useBlog } from "~/composables/useBlog";
import MarkdownRenderer from "~/components/MarkdownRenderer.vue";

const router = useRouter();
const { getPost, updatePost, isLoading, error } = useBlog();

const form = ref({});
const postId = router.currentRoute.value.params.id;

onMounted(async () => {
  try {
    form.value = await getPost(postId);
  } catch (err) {
    console.error("Failed to fetch post:", err);
  }
});

const handleSubmit = async () => {
  try {
    await updatePost(postId, form.value);
    router.push("/admin/blog");
  } catch (err) {
    console.error("Failed to update post:", err);
  }
};
</script>
