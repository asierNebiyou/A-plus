<script setup>
import { ref } from "vue";
const showModal = ref(false);
const isModalOpen = ref(false);
const modalSource = ref("");

const info = ref({});

const { contactInfo, isLoading, error, fetchContactInfo, updateContactInfo } =
  useContact();

await fetchContactInfo();
info.value = contactInfo.value;

const openModal = (source) => {
  modalSource.value = source;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<template>
  <div class="mb-20 bg-white">
    <div
      class="container mx-auto mt-6 px-10 py-16 relative container-lg mx-auto"
    >
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <!-- Left Content -->
        <div class="space-y-6 mb-20 md:m-0">
          <h1 class="text-4xl md:text-5xl font-bold text-[#1E2755]">
            Affordable and
            <br />
            Personalized
            <span class="relative">
              <span class="text-[#92A75A]">Tutoring</span>
              <svg
                class="absolute -top-1 -left-2 w-full h-full text-[#92A75A]"
                viewBox="0 0 200 100"
              >
                <path
                  d="M10,50 Q100,20 190,50"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </span>
          </h1>
          <p class="text-gray-600 text-lg">
            Unlock Your Child's Full Potential with Affordable, Personalized
            Tutoring Designed to Inspire Confidence and Academic Success.
          </p>
          <div class="flex space-x-4">
            <button
              @click="openModal('Hero-page')"
              class="bg-[#92A75A] text-white px-6 py-3 rounded-lg hover:bg-opacity-90"
            >
              Schedule a Free Trial
            </button>
            <button
              class="flex items-center space-x-2 px-6 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
              @click="showModal = true"
            >
              <svg
                class="w-5 h-5 animate-pulse"
                fill="#1E2755"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                ></path>
              </svg>
              <span class="font-semibold opacity-80"
                >Watch our introduction video</span
              >
            </button>
          </div>
        </div>

        <!-- Right Content -->
        <div class="relative">
          <div
            class="relative rounded-full border-8 border-[#92A75A] w-[350px] h-[350px] mx-auto"
          >
            <!-- Replace with actual image -->
            <div
              class="inset-7 bg-gray-100 rounded-full w-[320px] h-[320px] mx-2 my-2"
            ></div>
            <img
              src="/public/heroimage.png"
              alt="Hero image"
              class="object-cover absolute -top-20 min-w-[410px] -left-5"
            />
          </div>
          <!-- Rating Card -->
          <a
            href="https://www.google.com/maps/place/A+Plus+Tutoring/@39.764306,-105.1844482,10z/data=!4m18!1m9!3m8!1s0x8b941080b3729781:0xfee7ae2b024c9a04!2sA+Plus+Tutoring!8m2!3d39.7642444!4d-104.8547524!9m1!1b1!16s%2Fg%2F11l34t7jt_!3m7!1s0x8b941080b3729781:0xfee7ae2b024c9a04!8m2!3d39.7642444!4d-104.8547524!9m1!1b1!16s%2Fg%2F11l34t7jt_?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D"
          >
            <div
              class="absolute -bottom-12 right-40 bg-white rounded-lg shadow-lg p-4"
            >
              <div class="text-center">
                <h3 class="font-bold">Book Your Free</h3>
                <p>Consultation Today</p>
                <div class="flex items-center justify-center mt-2">
                  <span class="text-[#92A75A] font-bold">5.0</span>
                  <div class="flex text-[#92A75A] ml-2">
                    <span>★★★★★</span>
                  </div>
                  <span class="text-gray-500 text-sm ml-2">(Reviews)</span>
                </div>
              </div>
            </div>
          </a>

          <!-- Decorative Circles -->
          <div
            class="absolute -top-4 left-5 md:-left-4 w-20 h-20 rounded-full bg-[#470137]"
          ></div>
          <div
            class="absolute top-1/2 -right-4 w-12 h-12 rounded-full bg-[#1E2755]"
          ></div>
          <div
            class="absolute bottom-1/4 md:top-80 -left-0 md:-left-5 w-16 h-16 rounded-full bg-[#92A75A]"
          ></div>
        </div>
      </div>
    </div>
    <ConsultationModal
      :is-open="isModalOpen"
      :source="modalSource"
      @close="closeModal"
    />
    <div
      v-if="showModal"
      class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
    >
      <div class="bg-white rounded-lg overflow-hidden w-11/12 max-w-3xl">
        <!-- Modal Header -->
        <div class="flex justify-between items-center p-4 border-b">
          <h3 class="text-xl font-semibold">Watch Video</h3>
          <button
            class="text-gray-600 hover:text-gray-900"
            @click="showModal = false"
          >
            ✕
          </button>
        </div>

        <!-- Modal Body (Video) -->
        <div class="p-4">
          <iframe
            class="w-full aspect-video"
            v-if="info"
            :src="info.introVideo"
            title="Video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
