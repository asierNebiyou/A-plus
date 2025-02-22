<template>
  <NuxtLayout name="layout">
    <section class="mx-auto py-16 px-4 bg-gray-50">
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
                    >Expert tutoring with proven track records of student
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

<!-- <script lang="ts" setup>
const { contactInfo, isLoading, fetchContactInfo } = useContact();
await fetchContactInfo();
</script> -->

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
