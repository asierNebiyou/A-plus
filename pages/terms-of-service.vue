<template>
  <NuxtLayout name="layout">
    <section
      class="mx-auto py-16 px-4 bg-gradient-to-b from-gray-50 to-gray-100"
    >
      <div
        class="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
      ></div>

      <div
        class="absolute top-40 left-40 w-80 h-80 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
      ></div>
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
              >Terms of Service</span
            >
            <h2
              class="text-3xl font-bold text-[#1E2755] mt-2 hover:text-[#92A75A] transition-colors duration-300"
            >
              Terms & Conditions
            </h2>
            <p class="text-gray-600 mt-4">Effective Date: 10/04/2024</p>
          </div>

          <div
            class="space-y-6 bg-white p-6 rounded-lg shadow-lg relative z-10"
          >
            <h3 class="text-xl font-semibold text-[#1E2755]">
              1. Introduction
            </h3>
            <p class="text-gray-600">
              Welcome to A+ Tutoring! By accessing or using our services, you
              agree to abide by these Terms of Service. Please read them
              carefully.
            </p>

            <h3 class="text-xl font-semibold text-[#1E2755]">
              2. Services Provided
            </h3>
            <p class="text-gray-600">
              A+ Tutoring offers online and in-person tutoring services. We
              reserve the right to modify or discontinue any part of our
              services at any time.
            </p>

            <h3 class="text-xl font-semibold text-[#1E2755]">
              3. User Responsibilities
            </h3>
            <ul class="space-y-4">
              <li class="text-gray-600">
                • You must provide accurate information when registering.
              </li>
              <li class="text-gray-600">
                • You are responsible for maintaining the confidentiality of
                your account.
              </li>
              <li class="text-gray-600">
                • You may not use our services for unlawful or prohibited
                activities.
              </li>
            </ul>

            <h3 class="text-xl font-semibold text-[#1E2755]">
              4. Payment & Cancellations
            </h3>
            <ul class="space-y-4">
              <li class="text-gray-600">
                • Payments must be made in advance for scheduled tutoring
                sessions.
              </li>
              <li class="text-gray-600">
                • Cancellations must be made at least 24 hours in advance to
                avoid charges.
              </li>
              <li class="text-gray-600">
                • Refunds will be issued based on our refund policy.
              </li>
            </ul>

            <h3 class="text-xl font-semibold text-[#1E2755]">
              5. Limitation of Liability
            </h3>
            <p class="text-gray-600">
              A+ Tutoring is not liable for any direct, indirect, incidental, or
              consequential damages resulting from the use of our services.
            </p>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script lang="ts" setup></script>

<style></style>
