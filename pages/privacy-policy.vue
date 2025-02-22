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
            <h3 class="text-xl font-semibold text-[#1E2755]">
              6. Sharing Your Information
            </h3>
            <p class="text-gray-600">
              No mobile information will be shared with third parties/affiliates
              for marketing/promotional purposes. All other categories exclude
              text messaging originator opt-in data and consent; this
              information will not be shared with any third parties.
            </p>
            <p class="text-gray-600">
              We also do not sell, rent, or share any other personal information
              we collect with third-party providers for marketing purposes. We
              only use your personal information to improve the quality of our
              services.
            </p>

            <h3 class="text-xl font-semibold text-[#1E2755]">
              7. Retention of Personal Information
            </h3>
            <p class="text-gray-600">
              We retain your personal information for as long as it is necessary
              to fulfill the purposes outlined in this privacy policy and comply
              with legal obligations.
            </p>

            <h3 class="text-xl font-semibold text-[#1E2755]">8. Your Rights</h3>
            <ul class="space-y-4">
              <li class="text-gray-600">
                • Access, update, or delete your personal information.
              </li>
              <li class="text-gray-600">
                • Withdraw your consent to receive communications at any time by
                contacting us.
              </li>
            </ul>

            <h3 class="text-xl font-semibold text-[#1E2755]">
              9. Contact Information
            </h3>
            <p class="text-gray-600">
              If you have any questions about this privacy policy or wish to
              make a request regarding your personal information, please contact
              us at:
            </p>
            <ul class="space-y-4">
              <li class="text-gray-600">• Phone: +1 (303) 720-6070</li>
              <li class="text-gray-600">• Email: Admin@aplusmentors.com</li>
            </ul>

            <h3 class="text-xl font-semibold text-[#1E2755]">
              10. Changes to This Privacy Policy
            </h3>
            <p class="text-gray-600">
              We may update this privacy policy from time to time to reflect
              changes in our practices or legal requirements. We will notify you
              of any significant changes by updating the effective date at the
              top of this page and communicating the update via mediums you have
              given consent to receive notifications.
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
