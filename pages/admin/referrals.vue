<template>
  <NuxtLayout name="admin">
    <div class="p-8 min-h-screen bg-gray-100">
      <div class="max-w-5xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <h2 class="text-3xl font-semibold text-gray-900 mb-6">
          Generate Your Affiliate Link
        </h2>

        <!-- Email Input and Generate Link -->
        <div class="mb-6 relative">
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            class="w-full p-3 pr-14 text-sm rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            @click="createReferral"
            class="absolute right-2 top-1 bg-[#92A75A] text-white py-2 px-4 rounded-full hover:bg-green-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>

        <!-- Show Generated Referral Link -->
        <div
          v-if="referralLink"
          class="mt-6 p-4 rounded-lg bg-gray-50 shadow-md"
        >
          <h3 class="font-semibold text-lg text-gray-800 mb-2">
            Your Referral Link:
          </h3>
          <p class="text-sm text-gray-700 break-all">
            <a
              :href="referralLink"
              class="text-blue-600 hover:underline"
              target="_blank"
              >{{ referralLink }}</a
            >
          </p>
        </div>

        <!-- Referral Links Table -->
        <div class="overflow-x-auto mt-6">
          <table
            v-if="referralData.length"
            class="min-w-full bg-white table-auto rounded-lg shadow-xl"
          >
            <thead>
              <tr class="text-left border-b-2 border-gray-300 bg-gray-100">
                <th class="py-4 px-6 text-sm text-gray-700">Email</th>
                <th class="py-4 px-6 text-sm text-gray-700">Referral Link</th>
                <th class="py-4 px-6 text-sm text-gray-700">Clicks</th>
                <th class="py-4 px-6 text-sm text-gray-700">Actions (Click)</th>
                <th class="py-4 px-6 text-sm text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="ref in referralData"
                :key="ref.code"
                class="border-b border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <td class="py-4 px-6 text-sm text-gray-800">{{ ref.email }}</td>
                <td class="py-4 px-6 text-sm text-gray-600 break-all">
                  <a
                    :href="`${baseUrl}?ref=${ref.code}`"
                    class="text-blue-500 hover:underline"
                    target="_blank"
                    >{{ `${baseUrl}?ref=${ref.code}` }}</a
                  >
                </td>
                <td class="py-4 px-6 text-sm text-gray-600">
                  {{ ref.clicks }}
                </td>
                <td class="py-4 px-6 text-sm text-gray-600">
                  <p v-for="(key, action) in ref.actions">
                    {{ action }}({{ key }})
                  </p>
                </td>
                <td class="py-4 px-6 flex space-x-3">
                  <!-- Copy Link Icon -->
                  <button
                    @click="copyLink(ref.code)"
                    class="text-blue-600 hover:text-blue-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 48 48"
                    >
                      <path
                        d="M 18.5 5 C 15.480226 5 13 7.4802259 13 10.5 L 13 32.5 C 13 35.519774 15.480226 38 18.5 38 L 34.5 38 C 37.519774 38 40 35.519774 40 32.5 L 40 10.5 C 40 7.4802259 37.519774 5 34.5 5 L 18.5 5 z M 18.5 8 L 34.5 8 C 35.898226 8 37 9.1017741 37 10.5 L 37 32.5 C 37 33.898226 35.898226 35 34.5 35 L 18.5 35 C 17.101774 35 16 33.898226 16 32.5 L 16 10.5 C 16 9.1017741 17.101774 8 18.5 8 z M 11 10 L 9.78125 10.8125 C 8.66825 11.5545 8 12.803625 8 14.140625 L 8 33.5 C 8 38.747 12.253 43 17.5 43 L 30.859375 43 C 32.197375 43 33.4465 42.33175 34.1875 41.21875 L 35 40 L 17.5 40 C 13.91 40 11 37.09 11 33.5 L 11 10 z"
                      ></path>
                    </svg>
                  </button>
                  <!-- Delete Icon -->
                  <button @click="removeReferral(ref._id)">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="red"
                        d="M10 2l-1 1H3v2h18V3h-6l-1-1zm-4.635 5l1.527 13.264c.132.99.984 1.736 1.982 1.736h8.248c.998 0 1.851-.745 1.984-1.744L18.365 7H5.365z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useReferral } from "~/composables/useReferral";

const { referralData, generateReferral, loadReferrals, deleteReferral } =
  useReferral();
const email = ref("");
const referralLink = ref("");
const baseUrl = ref("");

onMounted(async () => {
  await loadReferrals();
  baseUrl.value = window.location.origin;
});

const createReferral = async () => {
  if (!email.value) return;
  referralLink.value = await generateReferral(email.value);
  email.value = "";
  await loadReferrals();
};

const removeReferral = async (id) => {
  await deleteReferral(id);
  await loadReferrals();
};

const copyLink = (code) => {
  navigator.clipboard.writeText(`${baseUrl.value}?ref=${code}`);
  alert("Link copied to clipboard!");
};
</script>
