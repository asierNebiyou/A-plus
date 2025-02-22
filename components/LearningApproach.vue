<template>
  <div class="max-w-6xl mx-auto px-4 py-5">
    <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
      Our Personalized One-On-One Learning Approach
    </h2>
    <p class="text-gray-600 mb-8 max-w-3xl">
      We believe that every student is unique. Our tailored tutoring sessions
      cater to your specific learning style, ensuring you grasp concepts with
      ease.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div
        v-if="!info.podcastVideo"
        class="text-center py-12 flex flex-col items-center justify-center"
      >
        <div
          style="width: 84px; height: 84px"
          class="animate-spin rounded-full border-b-2 border-[#92A75A] mx-auto"
        ></div>
      </div>
      <div
        v-else="info.podcastVideo"
        class="relative rounded-xl overflow-hidden cursor-pointer"
        @click="openModal"
      >
        <div class="aspect-w-16 aspect-h-9 relative">
          <div class="absolute inset-0 flex items-center justify-center">
            <button
              class="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-pulse"
            >
              <svg
                class="w-8 h-8 text-[#94A95B]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M8 5v10l7-5-7-5z" />
              </svg>
            </button>
          </div>
          <iframe
            class="w-full aspect-video"
            v-if="info"
            :src="info.podcastVideo"
            title="Video"
            frameborder="0"
            allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="py-4 bg-white">
          <p class="text-[#2E3E5C]"></p>
          <h3 class="font-semibold text-lg">Get to know us and our passion</h3>
          <p class="text-[#2E3E5C]">
            Check out our latest podcast about A plus! Discover how personalized
            learning can help students excel. 🎧📚
          </p>
        </div>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-2 gap-3">
        <div v-for="feature in features" :key="feature.title" class="bg-white">
          <img
            :src="feature.img"
            :alt="feature.title"
            class="object-cover rounded-2xl my-2 hover:scale-105 transition"
          />
          <h4 class="font-semibold mb-2 p-2 text-[#2E3E5C]">
            {{ feature.title }}
          </h4>
        </div>
      </div>
    </div>
    <Teleport to="body">
      <div
        v-if="isModalOpen"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50"
      >
        <div
          class="bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full relative"
        >
          <button
            @click="closeModal"
            class="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          >
            ✕
          </button>
          <iframe
            class="w-full aspect-video mt-5"
            v-if="info"
            :src="info.podcastVideo"
            title="Video"
            frameborder="0"
            allow="accelerometer;  autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from "vue";
const { contactInfo, isLoading, error, fetchContactInfo, updateContactInfo } =
  useContact();
const info = ref("");
const isModalOpen = ref(false);
await fetchContactInfo();
info.value = contactInfo.value;
const openModal = () => {
  isModalOpen.value = true;
};
const closeModal = () => {
  isModalOpen.value = false;
};
const features = [
  { title: "Customized Lesson Plans", img: "/customizedLessonplans.png" },
  { title: "Experienced Tutors", img: "/expiriencedtutors.png" },
  { title: "Flexible Scheduling Options", img: "/scheduleimg.png" },
  { title: "Affordable Pricing", img: "/affordable.png" },
];
</script>
