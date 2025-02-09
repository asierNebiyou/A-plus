<template>
  <NuxtLayout name="admin">
    <div class="p-4 max-w-2xl mx-auto">
      <h1 class="text-2xl font-bold mb-4">Create New Testimonial</h1>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >First name</label
          >
          <input
            v-model="form.name"
            type="text"
            id="first_name"
            class="bg-white bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="John"
            required
          />
        </div>

        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Email</label
          >
          <input
            v-model="form.email"
            type="email"
            id="email"
            class="bg-white bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="John@j.com"
          />
        </div>
        <div>
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Content</label
          >
          <textarea
            v-model="form.testimonial"
            required
            rows="4"
            class="bg-white bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          ></textarea>
        </div>

        <div class="flex gap-4">
          <button
            type="submit"
            :disabled="isLoading"
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {{ isLoading ? "Saving ..." : "Submit" }}
          </button>
          <NuxtLink
            to="/admin/testimonials"
            class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancel
          </NuxtLink>
        </div>
      </form>
    </div>
  </NuxtLayout>
</template>

<script setup>
const router = useRouter();
const { addTestimonial, isLoading } = useTestimonial();

const form = ref({
  name: "",
  email: "",
  content: "",
});

const handleSubmit = async () => {
  await addTestimonial(form.value);
  router.push("/admin/testimonials");
};
</script>
