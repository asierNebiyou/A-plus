<template>
  <section
    class="relative py-16 px-8 max-w-6xl mx-auto bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl overflow-hidden"
  >
    <h2
      class="text-4xl font-extrabold text-gray-900 text-center mb-12 relative z-10"
    >
      Frequently Asked Questions
    </h2>

    <div class="space-y-8 relative z-10">
      <div
        v-for="(faq, index) in faq"
        :key="index"
        class="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
      >
        <!-- Frosted glass effect -->
        <button
          @click="toggleFAQ(index)"
          class="flex justify-between items-center w-full text-left py-5 px-7 focus:outline-none"
        >
          <span class="text-lg font-semibold text-gray-800">{{
            faq.question
          }}</span>
          <span
            class="transition transform"
            :class="[openIndex === index ? 'rotate-180' : '', 'text-[#91A65A]']"
          >
            <!-- Added text-[#91A65A] here to inherit color -->
            <svg
              class="w-7 h-7 fill-none stroke-current"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </button>

        <div
          v-if="openIndex === index"
          class="px-7 pb-6 text-gray-700 leading-relaxed"
        >
          {{ faq.answer }}
        </div>
      </div>
    </div>

    <!-- Decorative element (optional) -->
    <div
      class="absolute bottom-0 right-0 w-64 h-64 bg-[#91A65A] rounded-full -mr-24 -mb-24"
    ></div>

    <!-- Improved Background Element -->
    <div class="absolute top-0 left-0 w-full h-full -z-20">
      <svg
        class="absolute top-1/4 left-1/4 w-32 h-32 text-[#91A65A] fill-current animate-pulse"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
      </svg>
      <svg
        class="absolute bottom-1/4 right-1/4 w-40 h-40 text-[#91A65A] fill-current animate-spin-slow"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#92A75A"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2"></rect>
      </svg>
    </div>
    <div
      class="absolute top-12 -left-20 w-64 h-64 bg-[#91A65A] rounded-full -mr-24 -mb-24 opacity-80"
    ></div>

    <!-- Improved Background Element -->
    <div class="absolute top-0 left-0 w-full h-full -z-20">
      <svg
        class="absolute top-1/4 left-1/4 w-32 h-32 text-[#91A65A] fill-current animate-pulse"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
      </svg>
      <svg
        class="absolute bottom-1/4 right-1/4 w-40 h-40 text-[#91A65A] fill-current animate-spin-slow"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#92A75A"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2"></rect>
      </svg>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
const { faqs, fetchFaqs, isLoading, error } = useFaq();
const openIndex = ref(0);
const faq = ref([
  {
    question: "How does tutoring work?",
    answer:
      "Our tutoring sessions are conducted online, providing you with personalized, one-on-one support from experienced tutors. We tailor each session to your specific learning needs, ensuring you get the most out of every minute.",
  },
  {
    question: "What subjects do you cover?",
    answer:
      "We offer a comprehensive range of subjects, including mathematics, sciences (biology, chemistry, physics), English language arts, history, and more. If you don't see your subject listed, please contact us – we're always expanding our offerings!",
  },
  {
    question: "Can I choose my tutor?",
    answer:
      "Absolutely! We believe that a strong student-tutor connection is key to successful learning. You can browse our tutor profiles, read reviews, and select the tutor that best aligns with your learning style and subject matter expertise.",
  },
  {
    question: "How do I schedule a session?",
    answer:
      "Scheduling a session is easy! Simply create an account on our platform, browse available tutors, and select a time that works for you. You can also purchase tutoring packages for discounted rates. We offer flexible scheduling to fit your busy lifestyle.",
  },
]);
const toggleFAQ = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};

onMounted(async () => {
  await fetchFaqs();
  if (faqs.value.keys(obj).length) {
    faq.value = faqs.value;
  }
});
</script>
