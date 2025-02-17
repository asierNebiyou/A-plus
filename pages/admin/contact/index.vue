<template>
  <NuxtLayout name="admin">
    <div class="min-h-screen bg-gray-50 p-8">
      <div class="max-w-7xl mx-auto">
        <div class="flex justify-between items-center mb-8">
          <h1 class="text-3xl font-bold text-gray-900">Contact Information</h1>
        </div>

        <div v-if="isLoading" class="text-center py-12">
          <div
            class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#92A75A] mx-auto"
          ></div>
        </div>

        <form v-else @submit.prevent="handleSubmit" class="space-y-8">
          <div class="bg-white rounded-lg shadow-sm p-6">
            <h2 class="text-lg font-medium text-gray-900 mb-4">
              Basic Information
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2"
                  >Email</label
                >
                <input
                  v-model="form.email"
                  type="email"
                  class="w-full p-2.5 border border-gray-200 rounded-lg focus:ring-[#92A75A] focus:border-[#92A75A]"
                  required
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2"
                  >Phone</label
                >
                <input
                  v-model="form.phone"
                  type="tel"
                  class="w-full p-2.5 border border-gray-200 rounded-lg focus:ring-[#92A75A] focus:border-[#92A75A]"
                  required
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2"
                  >Scheduler link</label
                >
                <input
                  v-model="form.calendarly"
                  type="tel"
                  class="w-full p-2.5 border border-gray-200 rounded-lg focus:ring-[#92A75A] focus:border-[#92A75A]"
                  required
                />
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="bg-white rounded-lg shadow-sm p-6">
            <h2 class="text-lg font-medium text-gray-900 mb-4">
              Social Media Links
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div v-for="(_, platform) in form.socialLinks" :key="platform">
                <label
                  class="block text-sm font-medium text-gray-700 mb-2 capitalize"
                >
                  {{ platform }}
                </label>
                <div class="flex">
                  <span
                    class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-200 bg-gray-50 text-gray-500"
                  >
                    <i :class="getSocialIcon(platform)"></i>
                  </span>
                  <input
                    v-model="form.socialLinks[platform]"
                    type="url"
                    class="flex-1 p-2.5 border border-gray-200 rounded-r-lg focus:ring-[#92A75A] focus:border-[#92A75A]"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Additional Information -->
          <div class="bg-white rounded-lg shadow-sm p-6">
            <h2 class="text-lg font-medium text-gray-900 mb-4">
              Additional Information
            </h2>
            <div class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2"
                  >Introduction Video URL</label
                >
                <input
                  v-model="form.introVideo"
                  type="text"
                  class="w-full p-2.5 border border-gray-200 rounded-lg focus:ring-[#92A75A] focus:border-[#92A75A]"
                />

                <div v-if="form.introVideo" class="mt-4">
                  <div class="p-4">
                    <iframe
                      class="w-full aspect-video"
                      :src="form.introVideo"
                      title="Video"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2"
                  >Podcast Video URL</label
                >
                <input
                  v-model="form.podcastVideo"
                  type="text"
                  class="w-full p-2.5 border border-gray-200 rounded-lg focus:ring-[#92A75A] focus:border-[#92A75A]"
                />

                <div v-if="form.podcastVideo" class="mt-4">
                  <div class="p-4">
                    <iframe
                      class="w-full aspect-video"
                      :src="form.podcastVideo"
                      title="Video"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-end">
            <button
              type="submit"
              class="bg-[#92A75A] text-white px-6 py-2.5 rounded-lg hover:bg-[#7a8c4c] transition-colors"
              :disabled="isLoading || uploading"
            >
              <span v-if="isLoading || uploading">Saving...</span>
              <span v-else>Save Changes</span>
            </button>
          </div>
        </form>
      </div>

      <div
        v-if="showSuccessToast"
        class="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center"
      >
        <CheckCircleIcon class="w-5 h-5 mr-2" />
        Changes saved successfully
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref, watch } from "vue";
// import { useRuntimeConfig } from "#app";
import { CheckCircleIcon } from "@heroicons/vue/24/outline";

// const config = useRuntimeConfig();
// const folderId = config.public.FOLDER_ID;

// const { uploadVideo, uploading } = useGoogleDrive();
const {
  contactInfo,
  isLoading,
  fetchContactInfo,
  updateContactInfo,
  deleteFile,
} = useContact();

const form = ref({
  email: "",
  phone: "",
  address: {
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  },
  socialLinks: {
    facebook: "",
    twitter: "",
    linkedin: "",
    instagram: "",
    tiktok: "",
    telegram: "",
  },
  introVideo: "",
  podcastVideo: "",
  calendarly: "",
  stats: {
    studentsEmpowered: 0,
    gradeImprovement: 0,
    tutorialHours: 0,
  },
});

const file = ref(null);
const showSuccessToast = ref(false);

// const handleFileChange = (event) => {
//   const target = event.target;
//   file.value = target.files?.[0] || null;
// };

await fetchContactInfo();

watch(
  contactInfo,
  (newContactInfo) => {
    if (newContactInfo) {
      form.value = { ...form.value, ...newContactInfo };
    }
  },
  { immediate: true }
);

const getSocialIcon = (platform) => {
  const icons = {
    facebook: "fab fa-facebook",
    twitter: "fab fa-twitter",
    linkedin: "fab fa-linkedin",
    instagram: "fab fa-instagram",
    tiktok: "fab fa-tiktok",
    telegram: "fab fa-telegram",
  };
  return icons[platform];
};

const handleSubmit = async () => {
  try {
    // if (file.value) {
    //   form.value.introVideo = await uploadVideo(file.value);
    //   console.log(form.value.introVideo);
    // }
    await updateContactInfo(form.value);
    showSuccessToast.value = true;
    setTimeout(() => {
      showSuccessToast.value = false;
    }, 3000);
  } catch (e) {
    console.error("Failed to save changes:", e);
  }
};
</script>
