<script setup>
import { ref } from "vue";
import { useAuth } from "~/composables/useAuth";

const { login, error } = useAuth();
const username = ref("");
const password = ref("");
const isLoading = ref(false);

const handleSubmit = async () => {
  isLoading.value = true;
  await login(username.value, password.value);
  isLoading.value = false;
};
</script>

<template>
  <NuxtLayout name="layout">
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 class="text-2xl font-semibold text-center mb-6">Admin Login</h2>
        <div v-if="error" class="text-red-500 text-sm mb-4 text-center">
          {{ error }}
        </div>
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label class="block text-gray-700 text-sm font-medium mb-2"
              >Username</label
            >
            <input
              v-model="username"
              type="text"
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label class="block text-gray-700 text-sm font-medium mb-2"
              >Password</label
            >
            <input
              v-model="password"
              type="password"
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            class="w-full bg-[#92A75A] text-white p-3 rounded-lg hover:bg-blue-600 transition disabled:opacity-50"
            :disabled="isLoading"
          >
            {{ isLoading ? "Logging in..." : "Login" }}
          </button>
        </form>
      </div>
    </div>
  </NuxtLayout>
</template>

<style>
body {
  font-family: "Inter", sans-serif;
}
</style>
