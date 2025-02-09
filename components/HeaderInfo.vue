<script setup>
import { ref } from "vue";
const info = ref({});

const { contactInfo, isLoading, error, fetchContactInfo, updateContactInfo } =
  useContact();
await fetchContactInfo();
info.value = contactInfo.value;
</script>

<template>
  <div class="bg-[#92A75A] text-white py-0 px-4">
    <div
      class="container text-sm md:text-base mx-auto flex justify-center gap-5 items-center"
    >
      <a :href="`mailto:${info.email}`" class="flex items-center">
        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
          ></path>
          <path
            d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
          ></path>
        </svg>
        {{ info.email }}
      </a>
      <a :href="`tel:${info.phone}`" class="flex items-center">
        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
          ></path>
        </svg>
        {{ info.phone }}
      </a>
    </div>
  </div>
</template>
