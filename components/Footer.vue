<template>
  <footer class="bg-[#2E3E5C] py-8 px-4 md:px-8 mt-5">
    <div class="max-w-6xl mx-auto">
      <!-- Top Section with Logo and Social Icons -->
      <div class="flex flex-col md:flex-row justify-between items-center mb-8">
        <!-- Logo -->
        <div class="mb-6 md:mb-0">
          <img
            src="/public/logo-light.png"
            alt="A plus tutoring"
            class="h-12"
          />
        </div>

        <!-- Social Media Icons -->
        <div class="flex">
          <div v-for="(_, platform) in socialsData.socialLinks">
            <NuxtLink
              v-if="socialsData.socialLinks[platform]"
              :key="platform"
              :to="socialsData.socialLinks[platform]"
              :aria-label="platform"
              class="bg-[#92A75A] mx-4 w-10 h-10 rounded-full bg-sage-500 flex items-center justify-center hover:bg-sage-600 transition-colors"
            >
              <i :class="getSocialIcon(platform)"></i>
            </NuxtLink>
          </div>
        </div>
      </div>
      <hr class="bg-[#EAEEF3] opacity-15 my-5" />
      <!-- Middle Section -->
      <div class="flex flex-col md:flex-row justify-between items-center mb-8">
        <!-- Company Name -->
        <div class="text-white text-xl font-semibold mb-4 md:mb-0">A plus</div>

        <!-- Navigation Links -->
        <nav class="flex flex-wrap justify-center gap-6">
          <NuxtLink
            v-for="(link, index) in links"
            :key="index"
            :to="link.url"
            class="text-white hover:text-sage-500 transition-colors"
          >
            {{ link.name }}
          </NuxtLink>
        </nav>

        <!-- Contact Button -->
        <NuxtLink
          to="/contact"
          class="mt-4 md:mt-0 px-6 py-2 bg-sage-500 text-white rounded-full hover:bg-sage-600 transition-colors bg-[#92A75A]"
        >
          Contact Us
        </NuxtLink>
      </div>

      <!-- Copyright -->
      <div class="text-center text-white text-sm">
        <p>© power 2025 - All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const { contactInfo, isLoading, error, fetchContactInfo } = useContact();
const socialsData = ref({
  socialLinks: {},
});
await fetchContactInfo();
socialsData.value = contactInfo.value;
const getSocialIcon = (platform) => {
  const icons = {
    facebook: "fab fa-facebook text-[#1E2755]",
    twitter: "fab fa-twitter text-[#1E2755]",
    linkedin: "fab fa-linkedin text-[#1E2755]",
    instagram: "fab fa-instagram text-[#1E2755]",
    telegram: "fab fa-telegram  text-[#1E2755]",
    tiktok: "fab fa-tiktok text-[#1E2755]",
  };
  return icons[platform];
};

const links = ref([
  { name: "About Us", url: "/about" },
  { name: "Privacy policy", url: "/privacy-policy" },
  { name: "Terms of Service", url: "/terms-of-service" },
]);
</script>

<style></style>
