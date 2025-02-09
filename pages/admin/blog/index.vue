<template>
  <NuxtLayout name="admin">
    <div class="min-h-screen bg-gray-50 p-6">
      <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="flex justify-between items-center mb-8">
          <h1 class="text-3xl font-bold text-gray-900">Blog Posts</h1>
          <NuxtLink
            to="/admin/blog/create"
            class="bg-[#92A75A] text-white px-5 py-3 rounded-lg hover:bg-[#7a8c4c] transition-colors shadow-lg"
          >
            + Add New Post
          </NuxtLink>
        </div>

        <!-- Loading Spinner -->
        <div v-if="isLoading" class="text-center py-12">
          <div
            class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#92A75A] mx-auto"
          ></div>
        </div>

        <!-- Error Message -->
        <div
          v-if="error"
          class="bg-red-50 text-red-500 p-4 rounded-lg mb-6 shadow-md"
        >
          {{ error }}
        </div>

        <!-- Blog Posts Grid -->
        <div
          v-if="!loading && !error"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <div
            v-for="post in blogs"
            :key="post.id"
            class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <!-- Image -->
            <NuxtLink
              :to="'/admin/blog/edit/' + post.id"
              class="text-blue-600 hover:underline font-medium"
            >
              <img
                :src="post.image || '/default-blog.png'"
                alt="Blog Image"
                class="w-full h-48 object-cover"
              />

              <!-- Content -->
              <div class="p-5">
                <h2 class="text-xl font-bold text-gray-900 mb-2">
                  {{ post.title }}
                </h2>
                <p class="text-gray-600 line-clamp-3">
                  {{ post.content }}
                </p>

                <div class="mt-4 flex justify-between items-center">
                  <button
                    @click="deletePost(post.id)"
                    class="text-red-500 hover:text-red-700 transition-colors"
                  >
                    🗑 Delete
                  </button>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>

        <!-- No Posts Found -->
        <div
          v-if="!isLoading && !error && blogs.length === 0"
          class="text-center text-gray-500 mt-12"
        >
          No blog posts found.
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { onMounted } from "vue";
import { useBlog } from "~/composables/useBlog";

const { blogs, fetchBlogs, saveBlog, deleteBlog, featureBlog, loading, error } =
  useBlog();

onMounted(() => {
  fetchBlogs();
});
</script>

<style>
/* Truncate long text */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
