<template>
  <NuxtLayout name="layout">
    <div
      class="w-full bg-gradient-to-b from-gray-50 to-gray-100 mx-auto min-h-screen text-white flex items-center justify-center px-4"
    >
      <div
        class="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
      />

      <div
        class="absolute top-40 left-40 w-80 h-80 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
      />
      <div
        class="container mt-5 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <!-- Left Section -->
        <div class="relative overflow-hidden">
          <h1 class="text-3xl font-bold mb-4 pt-5 mt-7 text-[#2E3E5C]">
            People are Saying About <br />
            A plus Tutoring.
          </h1>
          <p class="mb-6 text-black">
            Empowering you to learn, grow, and succeed with the best tutoring at
            your fingertips.
          </p>

          <!-- Testimonial Carousel -->
          <div class="w-full h-35">
            <div
              class="flex transition-transform duration-500 ease-in-out"
              :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
            >
              <div
                v-for="(testimonial, index) in testimonials"
                :key="index"
                class="w-full flex-shrink-0"
              >
                <blockquote
                  class="border-l-4 border-primary pl-4 text-lg italic text-gray-600"
                >
                  "{{ testimonial.testimonial }}"
                </blockquote>
                <p class="mt-4 text-primary font-semibold text-gray-600">
                  — {{ testimonial.name }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Section -->
        <div class="bg-gray-800 p-8 rounded-lg shadow-md">
          <h2 class="text-2xl font-bold mb-4 text-center">
            Get Started With <br />A plus Tutoring
          </h2>
          <form @submit.prevent="submitForm">
            <input type="hidden" :value="source" />
            <div class="mb-4">
              <label for="name" class="block text-sm mb-2">Name</label>
              <input
                type="text"
                v-model="formData.name"
                id="name"
                required
                class="w-full p-3 rounded border border-gray-600 bg-gray-700 text-white focus:outline-none focus:border-primary"
                placeholder="Enter your Name."
              />
            </div>
            <div class="mb-4">
              <label for="email" class="block text-sm mb-2">Email</label>
              <input
                type="email"
                v-model="formData.email"
                id="email"
                required
                class="w-full p-3 rounded border border-gray-600 bg-gray-700 text-white focus:outline-none focus:border-primary"
                placeholder="Enter your Email."
              />
            </div>
            <div class="mb-4">
              <label for="phone" class="block text-sm mb-2">Phone Number</label>
              <input
                type="tel"
                v-model="formData.phone"
                id="phone"
                required
                class="w-full p-3 rounded border border-gray-600 bg-gray-700 text-white focus:outline-none focus:border-primary"
                placeholder="Enter your phone Number."
              />
            </div>
            <div class="mb-4 flex items-start">
              <input
                type="checkbox"
                id="consent"
                v-model="formData.consent"
                required
                class="mr-2"
              />
              <label for="consent" class="text-sm text-white">
                By providing a telephone number and submitting this form you are
                consenting to be contacted by SMS text message. Message & data
                rates may apply. You can reply STOP to opt-out of further
                messaging and reply HELP for more helpful information.
              </label>
            </div>
            <button
              type="submit"
              :disabled="loading || !formData.consent"
              class="w-full bg-[#92A75A] text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors disabled:bg-gray-600"
            >
              {{ loading ? "Submitting..." : "Request a Consultation" }}
            </button>

            <p v-if="error" class="text-red-500 text-sm mt-2 text-center">
              {{ error }}
            </p>
            <p
              v-if="successMessage"
              class="text-green-500 text-sm mt-2 text-center"
            >
              {{ successMessage }}
            </p>
          </form>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useConsultation } from "~/composables/useSubmittions";
import { useTestimonial } from "~/composables/useTestimonial";

const { addConsultation, loading, error } = useConsultation();
const { testimonialData, loadTestimonial } = useTestimonial();

const source = ref("contact-form");
const testimonials = ref([]);
const currentIndex = ref(0);
let interval = null;

// Auto-slide function
const nextSlide = () => {
  if (testimonials.value.length > 0) {
    currentIndex.value = (currentIndex.value + 1) % testimonials.value.length;
  }
};

const prevSlide = () => {
  if (testimonials.value.length > 0) {
    currentIndex.value =
      (currentIndex.value - 1 + testimonials.value.length) %
      testimonials.value.length;
  }
};

const startAutoSlide = () => {
  stopAutoSlide(); // Clear any existing interval
  interval = setInterval(nextSlide, 3000);
};

const stopAutoSlide = () => {
  if (interval) clearInterval(interval);
};

onMounted(async () => {
  await loadTestimonial();
  testimonials.value = testimonialData.value;

  if (testimonials.value.length > 0) {
    startAutoSlide();
  }
});

onUnmounted(stopAutoSlide);

const formData = ref({
  name: "",
  email: "",
  phone: "",
  consent: false,
});
const successMessage = ref("");

const submitForm = async () => {
  successMessage.value = "";
  try {
    await addConsultation({
      ...formData.value,
      source: source.value,
    });
    successMessage.value = "We'll be in touch soon!";
    formData.value = { name: "", email: "", phone: "" };
  } catch (err) {
    console.error(err);
  }
};
</script>

<style scoped>
.overflow-hidden {
  overflow: hidden;
}
.transition-transform {
  transition: transform 0.5s ease-in-out;
}
</style>
