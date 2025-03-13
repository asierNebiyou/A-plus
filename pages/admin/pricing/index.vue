<template>
  <NuxtLayout name="admin">
    <div class="min-h-screen bg-gray-50 p-8">
      <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="flex justify-between items-center mb-8">
          <h1 class="text-3xl font-bold text-gray-900">Pricing Plans</h1>
          <NuxtLink
            to="/admin/pricing/create"
            class="bg-gradient-to-r from-[#92A75A] to-[#7a8c4c] text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
          >
            + Add New Plan
          </NuxtLink>
        </div>

        <!-- Loading State -->
        <div v-if="isLoading" class="text-center py-12">
          <div
            class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#92A75A] mx-auto"
          ></div>
        </div>

        <!-- Error State -->
        <div
          v-else-if="error"
          class="bg-red-50 text-red-500 p-4 rounded-lg mb-6 shadow-md"
        >
          {{ error }}
        </div>

        <!-- Plans Grid -->
        <div
          v-else
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <div
            v-for="plan in pricingPlans"
            :key="plan._id"
            class="relative bg-white rounded-xl shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <!-- Edit/Delete Icons -->
            <div class="absolute top-4 right-4 flex space-x-3">
              <NuxtLink
                :to="`/admin/pricing/${plan._id}`"
                class="text-gray-400 hover:text-gray-600"
              >
                <PencilIcon class="w-5 h-5" />
              </NuxtLink>
              <button
                @click="confirmDelete(plan)"
                class="text-gray-400 hover:text-red-500"
              >
                <TrashIcon class="w-5 h-5" />
              </button>
            </div>

            <!-- Plan Type Badge -->
            <div class="mb-4 flex items-center space-x-2">
              <span
                :class="[
                  'px-3 py-1 text-xs font-medium rounded-full',
                  plan.type === 'free'
                    ? 'bg-gray-100 text-gray-600'
                    : plan.type === 'regular'
                    ? 'bg-blue-100 text-blue-600'
                    : 'bg-purple-100 text-purple-600',
                ]"
              >
                {{ plan.type }}
              </span>
              <span
                v-if="plan.isPopular"
                class="bg-yellow-100 text-yellow-600 px-3 py-1 text-xs font-medium rounded-full"
              >
                ⭐ Popular
              </span>
            </div>

            <!-- Plan Name & Price -->
            <h3 class="text-2xl font-semibold text-gray-900 mb-2">
              {{ plan.name }}
            </h3>
            <div class="mb-4">
              <span class="text-4xl font-extrabold text-gray-900"
                >${{ plan.price }}</span
              >
              <span class="text-gray-500"> / {{ plan.plan }}</span>
            </div>

            <!-- Features List -->
            <ul class="space-y-3 mb-6">
              <li
                v-for="(feature, index) in plan.features"
                :key="index"
                class="flex items-center text-gray-600"
              >
                <CheckIcon class="w-5 h-5 text-green-500 mr-2" />
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Delete Confirmation Modal -->
      <Transition name="fade">
        <div
          v-if="showDeleteModal"
          class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
        >
          <div class="bg-white rounded-xl p-6 max-w-md w-full shadow-lg">
            <h3 class="text-lg font-semibold mb-4">Confirm Delete</h3>
            <p class="text-gray-600 mb-6">
              Are you sure you want to delete this pricing plan? This action
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
import { ref, onMounted } from "vue";
import { TrashIcon, PencilIcon, CheckIcon } from "@heroicons/vue/24/outline";
import { usePricing } from "~/composables/usePricing";

const { pricingPlans, isLoading, error, fetchPlans, deletePlan } = usePricing();

const showDeleteModal = ref(false);
const planToDelete = ref(null);

onMounted(() => {
  fetchPlans();
});

const confirmDelete = (plan) => {
  planToDelete.value = plan;
  showDeleteModal.value = true;
};

const handleDelete = async () => {
  if (planToDelete.value) {
    await deletePlan(planToDelete.value._id);
    showDeleteModal.value = false;
    planToDelete.value = null;
  }
};
</script>

<style>
/* Smooth fade animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
