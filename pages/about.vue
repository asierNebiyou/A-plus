<template>
  <NuxtLayout name="layout">
    <section class="mx-auto py-16 px-4 bg-gray-50">
      <!-- Stats Section -->
      <div v-if="contactInfo.stats" class="mx-auto container mb-20 mt-5">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <!-- Stats Card 1 -->
          <div
            class="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group"
          >
            <div class="relative">
              <div
                class="absolute -top-4 -right-4 w-12 h-12 text-[#92A75A] opacity-20 group-hover:opacity-100 transition-opacity duration-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 19l9-5-9-5-9 5 9 5z" />
                </svg>
              </div>
              <span
                class="text-5xl font-bold text-[#92A75A] block mb-2 animate-counter"
                :data-target="contactInfo.stats.studentsEmpowered"
                data-suffix="+"
                >0+</span
              >
              <span
                class="text-[#1E2755] group-hover:text-[#92A75A] transition-colors duration-300"
                >Students Empowered</span
              >
            </div>
          </div>

          <!-- Stats Card 2 -->
          <div
            class="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group"
          >
            <div class="relative">
              <div
                class="absolute -top-4 -right-4 w-12 h-12 text-[#92A75A] opacity-20 group-hover:opacity-100 transition-opacity duration-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8 8 8-3.59 8-8-3.59-8-8-8z"
                  />
                </svg>
              </div>
              <span
                class="text-5xl font-bold text-[#92A75A] block mb-2 animate-counter"
                :data-target="contactInfo.stats.gradeImprovement"
                data-suffix="%"
                >0%</span
              >
              <span
                class="text-[#1E2755] group-hover:text-[#92A75A] transition-colors duration-300"
                >Grade Improvement</span
              >
            </div>
          </div>

          <!-- Stats Card 3 -->
          <div
            class="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group"
          >
            <div class="relative">
              <div
                class="absolute -top-4 -right-4 w-12 h-12 text-[#92A75A] opacity-20 group-hover:opacity-100 transition-opacity duration-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
                  />
                  <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                </svg>
              </div>
              <span
                class="text-5xl font-bold text-[#92A75A] block mb-2 animate-counter"
                :data-target="contactInfo.stats.tutorialHours"
                data-suffix="+"
                >0+</span
              >
              <span
                class="text-[#1E2755] group-hover:text-[#92A75A] transition-colors duration-300"
                >Tutorial Hours</span
              >
            </div>
          </div>
        </div>
      </div>
      <!-- Story Section -->
      <div class="container mx-auto">
        <div class="max-w-6xl mx-auto">
          <div class="mb-8 relative">
            <div
              class="absolute -left-8 -top-8 w-16 h-16 text-[#92A75A] opacity-10 animate-spin-slow"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                />
              </svg>
            </div>
            <span
              class="text-[#92A75A] font-medium inline-block hover:transform hover:scale-105 transition-transform duration-300"
              >Our Story</span
            >
            <h2
              class="text-3xl font-bold text-[#1E2755] mt-2 hover:text-[#92A75A] transition-colors duration-300"
            >
              We're just getting started
            </h2>
            <p class="text-gray-600 mt-4">
              We've already helped over 4,000 students achieve remarkable
              academic success.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div
              class="space-y-6 hover:bg-white hover:shadow-lg p-6 rounded-lg transition-all duration-300"
            >
              <p class="text-gray-600">
                At A plus, we believe every student has untapped potential
                waiting to be discovered. Our personalized approach focuses on
                building confidence, developing strong study habits, and
                achieving academic excellence through one-on-one mentorship.
              </p>
              <p class="text-gray-600">
                Our expert tutors work closely with students to identify their
                unique learning styles, overcome challenges, and create
                customized study plans that deliver results.
              </p>
            </div>

            <div class="space-y-6">
              <h3 class="text-xl font-semibold text-[#1E2755]">
                What Sets Us Apart
              </h3>
              <ul class="space-y-4">
                <li
                  class="flex items-start p-4 hover:bg-white hover:shadow-lg rounded-lg transition-all duration-300 group"
                >
                  <svg
                    class="w-6 h-6 text-[#92A75A] mt-1 mr-2 group-hover:scale-125 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span class="text-gray-600 group-hover:text-[#1E2755]"
                    >Personalized learning plans tailored to each student's
                    needs</span
                  >
                </li>
                <li
                  class="flex items-start p-4 hover:bg-white hover:shadow-lg rounded-lg transition-all duration-300 group"
                >
                  <svg
                    class="w-6 h-6 text-[#92A75A] mt-1 mr-2 group-hover:scale-125 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span class="text-gray-600 group-hover:text-[#1E2755]"
                    >Expert tutors with proven track records of student
                    success</span
                  >
                </li>
                <li
                  class="flex items-start p-4 hover:bg-white hover:shadow-lg rounded-lg transition-all duration-300 group"
                >
                  <svg
                    class="w-6 h-6 text-[#92A75A] mt-1 mr-2 group-hover:scale-125 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span class="text-gray-600 group-hover:text-[#1E2755]"
                    >Flexible scheduling and comprehensive subject
                    coverage</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="container mt-10 mx-auto">
        <Faq />
      </div>
    </section>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
const { contactInfo, isLoading, fetchContactInfo } = useContact();
await fetchContactInfo();
onMounted(async () => {
  const counters = document.querySelectorAll<HTMLElement>(".animate-counter");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target as HTMLElement;
          const target = parseInt(counter.dataset.target || "0");
          let count = 0;
          const speed = Math.ceil(target / 100); // Dynamic speed adjustment

          const updateCount = () => {
            if (count < target) {
              count += speed;
              if (count > target) count = target;
              counter.innerText = count + (counter.dataset.suffix || "");
              setTimeout(updateCount, 20);
            } else {
              counter.innerText = target + (counter.dataset.suffix || "");
            }
          };

          updateCount();
          observer.unobserve(counter); // Stop observing once animation is done
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => {
    counter.innerText = "0";
    observer.observe(counter);
  });
});
</script>

<style scoped>
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}
</style>
