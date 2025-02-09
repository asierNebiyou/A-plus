<template>
  <NuxtLayout name="admin">
    <div class="p-6 bg-gray-50 min-h-screen">
      <div class="max-w-7xl mx-auto">
        <!-- Header Section -->
        <div class="mb-8 flex justify-between items-center">
          <div>
            <h1 class="text-3xl font-bold text-gray-800">Testimonials</h1>
            <p class="text-gray-600 mt-1">Manage your customer testimonials</p>
          </div>
          <NuxtLink
            to="/admin/testimonials/create"
            class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center gap-2 shadow-sm"
          >
            <PlusIcon class="w-5 h-5" />
            Add Testimonial
          </NuxtLink>
        </div>

        <!-- Grid Layout -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="testimonial in testimonialData"
            :key="testimonial._id"
            class="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden border border-gray-100"
          >
            <div class="p-6">
              <!-- Avatar and Name Section -->
              <div class="flex items-center mb-4">
                <div
                  class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center"
                >
                  <span class="text-blue-600 font-semibold text-lg">
                    {{ testimonial.name.charAt(0) }}
                  </span>
                </div>
                <div class="ml-4">
                  <h3 class="font-semibold text-gray-800">
                    {{ testimonial.name }}
                  </h3>
                  <p class="text-sm text-gray-500">Customer</p>
                </div>
              </div>

              <!-- Content Section -->
              <div class="mb-4">
                <div class="flex mb-2">
                  <StarIcon
                    class="w-5 h-5 text-yellow-400"
                    v-for="n in 5"
                    :key="n"
                  />
                </div>
                <p class="text-gray-600 line-clamp-3">
                  {{ testimonial.testimonial }}
                </p>
              </div>

              <!-- Actions Section -->
              <div
                class="flex justify-end gap-2 mt-4 pt-4 border-t border-gray-100"
              >
                <button
                  @click="confirmDelete(testimonial._id)"
                  class="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                >
                  <TrashIcon class="w-5 h-5 text-red-500" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div
          v-if="testimonialData.length === 0"
          class="text-center py-12 bg-white rounded-xl mt-6"
        >
          <div class="flex justify-center mb-4">
            <MessageSquareIcon class="w-16 h-16 text-gray-300" />
          </div>
          <h3 class="text-lg font-medium text-gray-900">No testimonials yet</h3>
          <p class="mt-1 text-gray-500">
            Get started by adding your first testimonial
          </p>
          <NuxtLink
            to="/admin/testimonials/create"
            class="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Add Testimonial
          </NuxtLink>
        </div>
      </div>
      <Transition name="fade">
        <div
          v-if="showDeleteModal"
          class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
        >
          <div class="bg-white rounded-xl p-6 max-w-md w-full shadow-lg">
            <h3 class="text-lg font-semibold mb-4">Confirm Delete</h3>
            <p class="text-gray-600 mb-6">
              Are you sure you want to delete this Testimonial? This action
              cannot be undone.
            </p>
            <div class="flex justify-end space-x-4">
              <button
                @click="showDeleteModal = false"
                class="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                @click="handleDelete"
                class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </NuxtLayout>
</template>

<script setup>
import {
  PlusIcon,
  StarIcon,
  TrashIcon,
  MessageSquareIcon,
} from "lucide-vue-next";
const showDeleteModal = ref(false);
const planToDelete = ref(null);
const { testimonialData, loadTestimonial, deleteTestimonial } =
  useTestimonial();
const router = useRouter();

onMounted(() => {
  loadTestimonial();
});
const confirmDelete = (plan) => {
  planToDelete.value = plan;
  showDeleteModal.value = true;
};
const handleDelete = async () => {
  if (planToDelete.value) {
    await deleteTestimonial(planToDelete.value);
    showDeleteModal.value = false;
    planToDelete.value = null;
  }
};
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
