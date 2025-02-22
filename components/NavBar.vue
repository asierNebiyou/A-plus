<template>
  <HeaderInfo />
  <nav class="container mx-auto py-4 px-4">
    <!-- Navbar -->
    <div class="flex justify-between items-center">
      <!-- Logo -->
      <a href="/">
        <img src="/public/logo-light.png" alt="Aplus Tutoring" class="h-12" />
      </a>

      <!-- Hamburger Button for Mobile -->
      <button
        @click="toggleMenu"
        class="text-gray-700 lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-300"
      >
        <span v-if="!isOpen" class="material-icons"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="40"
            height="40"
            viewBox="0,0,256,256"
          >
            <defs>
              <linearGradient
                x1="12.066"
                y1="0.066"
                x2="34.891"
                y2="22.891"
                gradientUnits="userSpaceOnUse"
                id="color-1_Rdp3AydLFY2A_gr1"
              >
                <stop offset="0.237" stop-color="#92a75a"></stop>
                <stop offset="0.85" stop-color="#92a75a"></stop>
              </linearGradient>
              <linearGradient
                x1="12.066"
                y1="12.066"
                x2="34.891"
                y2="34.891"
                gradientUnits="userSpaceOnUse"
                id="color-2_Rdp3AydLFY2A_gr2"
              >
                <stop offset="0.237" stop-color="#92a75a"></stop>
                <stop offset="0.85" stop-color="#92a75a"></stop>
              </linearGradient>
              <linearGradient
                x1="12.066"
                y1="24.066"
                x2="34.891"
                y2="46.891"
                gradientUnits="userSpaceOnUse"
                id="color-3_Rdp3AydLFY2A_gr3"
              >
                <stop offset="0.237" stop-color="#92a75a"></stop>
                <stop offset="0.85" stop-color="#92a75a"></stop>
              </linearGradient>
            </defs>
            <g
              fill="none"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              style="mix-blend-mode: normal"
            >
              <g transform="scale(5.33333,5.33333)">
                <path
                  d="M43,15h-38c-1.1,0 -2,-0.9 -2,-2v-2c0,-1.1 0.9,-2 2,-2h38c1.1,0 2,0.9 2,2v2c0,1.1 -0.9,2 -2,2z"
                  fill="url(#color-1_Rdp3AydLFY2A_gr1)"
                ></path>
                <path
                  d="M43,27h-38c-1.1,0 -2,-0.9 -2,-2v-2c0,-1.1 0.9,-2 2,-2h38c1.1,0 2,0.9 2,2v2c0,1.1 -0.9,2 -2,2z"
                  fill="url(#color-2_Rdp3AydLFY2A_gr2)"
                ></path>
                <path
                  d="M43,39h-38c-1.1,0 -2,-0.9 -2,-2v-2c0,-1.1 0.9,-2 2,-2h38c1.1,0 2,0.9 2,2v2c0,1.1 -0.9,2 -2,2z"
                  fill="url(#color-3_Rdp3AydLFY2A_gr3)"
                ></path>
              </g>
            </g></svg
        ></span>
        <span v-else class="material-icons"
          ><svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke="#CCCCCC"
              stroke-width="0.24000000000000005"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                fill="#92a75a"
              ></path>
            </g></svg
        ></span>
      </button>

      <!-- Navigation Links (Desktop) -->
      <div class="hidden lg:flex space-x-8">
        <NuxtLink to="/" class="text-gray-700 hover:text-[#92A75A]">
          Home
        </NuxtLink>
        <NuxtLink to="/about" class="text-gray-700 hover:text-[#92A75A]">
          About Us
        </NuxtLink>
        <NuxtLink to="/pricing" class="text-gray-700 hover:text-[#92A75A]">
          Pricing
        </NuxtLink>
        <NuxtLink to="/contact" class="text-gray-700 hover:text-[#92A75A]">
          Contact Us
        </NuxtLink>
        <NuxtLink to="/free-classes" class="text-gray-700 hover:text-[#92A75A]">
          Classes
        </NuxtLink>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide-fade">
      <div
        v-if="isOpen"
        class="flex flex-col mt-4 space-y-4 lg:hidden bg-white p-4 rounded"
      >
        <NuxtLink to="/" class="text-gray-700 hover:text-[#92A75A]">
          Home
        </NuxtLink>
        <NuxtLink to="/about" class="text-gray-700 hover:text-[#92A75A]">
          About Us
        </NuxtLink>
        <NuxtLink to="/pricing" class="text-gray-700 hover:text-[#92A75A]">
          Pricing
        </NuxtLink>
        <NuxtLink to="/contact" class="text-gray-700 hover:text-[#92A75A]">
          Contact Us
        </NuxtLink>
        <NuxtLink to="/free-classes" class="text-gray-700 hover:text-[#92A75A]">
          Classes
        </NuxtLink>
      </div>
    </transition>
  </nav>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import HeaderInfo from "./HeaderInfo.vue";
const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
