<template>
  <NuxtLayout name="layout">
    <div class="min-h-screen bg-gray-50">
      <div class="bg-white">
        <div class="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div class="text-center">
            <h1
              class="text-4xl font-bold text-[#1E2755] sm:text-5xl md:text-6xl"
            >
              Start Learning Today with a
              <span class="text-[#92A75A]">Free Trial Class</span>
            </h1>
            <p
              class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
            >
              Experience our personalized tutoring approach with a complimentary
              class. See how we can help your child excel in their studies.
            </p>
            <div
              class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"
            >
              <button
                @click="openModal('free-class-page')"
                class="rounded-md bg-[#92A75A] px-8 py-3 text-base font-medium text-white hover:bg-[#1E2755]"
              >
                Book Your Free Class
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Features Grid -->
      <div class="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <!-- Feature 1 -->
          <div class="rounded-lg bg-white p-8 shadow-sm">
            <div class="text-green-600 mb-4"></div>
            <h3 class="text-xl font-semibold text-gray-900">
              Personalized Learning
            </h3>
            <p class="mt-2 text-gray-500">
              Customized lesson plans tailored to your child's unique learning
              style and needs.
            </p>
          </div>

          <!-- Feature 2 -->
          <div class="rounded-lg bg-white p-8 shadow-sm">
            <div class="text-green-600 mb-4"></div>
            <h3 class="text-xl font-semibold text-gray-900">Expert Tutoring</h3>
            <p class="mt-2 text-gray-500">
              Learn from experienced educators who are passionate about student
              success.
            </p>
          </div>

          <!-- Feature 3 -->
          <div class="rounded-lg bg-white p-8 shadow-sm">
            <div class="text-green-600 mb-4"></div>
            <h3 class="text-xl font-semibold text-gray-900">
              Flexible Schedule
            </h3>
            <p class="mt-2 text-gray-500">
              Choose from various time slots that work best for your schedule.
            </p>
          </div>
        </div>
      </div>

      <ConsultationModal
        :is-open="isModalOpen"
        :source="modalSource"
        @close="closeModal"
      />
    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref } from "vue";

const isModalOpen = ref(false);
const modalSource = ref("");

const openModal = (source) => {
  modalSource.value = source;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>
