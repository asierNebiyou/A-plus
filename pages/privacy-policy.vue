<template>
  <NuxtLayout name="layout">
    <section
      class="bg-gradient-to-b from-gray-50 to-gray-100 mx-auto py-16 px-4"
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
              >Privacy Policy</span
            >
            <h2
              class="text-3xl font-bold text-[#1E2755] mt-2 hover:text-[#92A75A] transition-colors duration-300"
            >
              Your Privacy Matters
            </h2>
            <p class="text-gray-600 mt-4">Effective Date: 10/04/2024</p>
          </div>

          <div
            class="space-y-6 bg-white p-6 rounded-lg shadow-lg z-10 relative"
          >
            <h3 class="text-xl font-semibold text-[#1E2755]">
              1. Introduction
            </h3>
            <p class="text-gray-600">
              Welcome to A+ Tutoring! We value your privacy and are committed to
              protecting the personal information you provide us. This privacy
              policy outlines how we collect, use, store, and protect the
              information provided to us, including phone numbers.
            </p>

            <h3 class="text-xl font-semibold text-[#1E2755]">
              2. Information We Collect
            </h3>
            <ul class="space-y-4">
              <li class="text-gray-600">
                • Personal Information: Name, email, phone number, and details
                provided during registration.
              </li>
              <li class="text-gray-600">
                • Payment Information: Necessary data for processing payments
                via PayPal and credit/debit cards.
              </li>
            </ul>

            <h3 class="text-xl font-semibold text-[#1E2755]">
              3. How We Use Your Information
            </h3>
            <ul class="space-y-4">
              <li class="text-gray-600">
                • To provide tutoring services, schedule lessons, and manage
                cancellations.
              </li>
              <li class="text-gray-600">
                • To process payments and handle billing.
              </li>
              <li class="text-gray-600">
                • To keep you updated about our services.
              </li>
            </ul>

            <h3 class="text-xl font-semibold text-[#1E2755]">
              4. Consent and 10DLC Compliance
            </h3>
            <p class="text-gray-600">
              By providing your phone number, you consent to receive
              communications from A+ Tutoring, including reminders and updates.
              You may withdraw consent at any time by contacting us.
            </p>
            <p class="text-gray-600">
              Message and Data Rates may apply. To stop SMS/MMS messaging, send
              STOP. For assistance, send HELP. We adhere to 10DLC regulations
              for responsible messaging.
            </p>

            <h3 class="text-xl font-semibold text-[#1E2755]">
              5. Protection of Your Information
            </h3>
            <p class="text-gray-600">
              We implement administrative, technical, and physical safeguards to
              ensure the security of your personal data.
            </p>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script lang="ts" setup></script>

<style>
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
