<script setup>
import { ref, computed, onMounted } from "vue";
import { useConsultation } from "~/composables/useSubmittions";

const { consultations, loadConsultations, updateConsultation, loading, error } =
  useConsultation();
const searchQuery = ref("");
const statusFilter = ref("");
const currentPage = ref(1);
const pageSize = 5;

await loadConsultations();

const filteredConsultations = computed(() => {
  return consultations.value.filter((consultation) => {
    const matchesSearch = [
      consultation.name,
      consultation.email,
      consultation.phone,
    ]
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase());

    const matchesStatus = statusFilter.value
      ? consultation.status === statusFilter.value
      : true;

    return matchesSearch && matchesStatus;
  });
});

const paginatedConsultations = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  return filteredConsultations.value.slice(start, start + pageSize);
});

const handleStatusChange = async (id, newStatus) => {
  await updateConsultation(id, { status: newStatus });
};

const totalPages = computed(() =>
  Math.ceil(filteredConsultations.value.length / pageSize)
);

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};
const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};
</script>

<template>
  <NuxtLayout name="admin">
    <div class="p-6 bg-white shadow rounded-lg">
      <h2 class="text-2xl font-semibold mb-4">Consultation Requests</h2>

      <!-- Filters: Search & Status -->
      <div class="flex flex-col md:flex-row gap-4 mb-4 justify-between">
        <!-- Search Input -->
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search by name, email, or phone"
          class="w-full md:w-1/2 p-2 border rounded-md"
        />

        <!-- Status Filter -->
        <select
          v-model="statusFilter"
          class="w-full md:w-1/4 p-2 border rounded-md"
        >
          <option value="">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="contacted">Contacted</option>
          <option value="scheduled">Scheduled</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

      <!-- Error Message -->
      <p v-if="error" class="text-red-500">{{ error }}</p>

      <!-- Loading State -->
      <p v-if="loading" class="text-gray-500">Loading ...</p>

      <!-- Consultation Table -->
      <div v-if="!loading && paginatedConsultations.length > 0">
        <table class="w-full border-collapse border border-gray-200">
          <thead class="bg-gray-100">
            <tr>
              <th class="border p-2">Name</th>
              <th class="border p-2">Email</th>
              <th class="border p-2">Phone</th>
              <th class="border p-2">Source</th>
              <th class="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="consultation in paginatedConsultations"
              :key="consultation._id"
              class="hover:bg-gray-50"
            >
              <td class="border p-2">{{ consultation.name }}</td>
              <td class="border p-2">{{ consultation.email }}</td>
              <td class="border p-2">{{ consultation.phone }}</td>
              <td class="border p-2">{{ consultation.source }}</td>
              <td class="border p-2">
                <select
                  :value="consultation.status"
                  @change="
                    handleStatusChange(consultation._id, $event.target.value)
                  "
                  class="border rounded p-1"
                >
                  <option value="pending">Pending</option>
                  <option value="contacted">Contacted</option>
                  <option value="scheduled">Scheduled</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Pagination Controls -->
        <div class="flex justify-between items-center mt-4">
          <button
            @click="prevPage"
            :disabled="currentPage === 1"
            class="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Previous
          </button>

          <span>Page {{ currentPage }} of {{ totalPages }}</span>

          <button
            @click="nextPage"
            :disabled="currentPage === totalPages"
            class="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      <p
        v-if="!loading && paginatedConsultations.length === 0"
        class="text-gray-500"
      >
        No consultations found.
      </p>
    </div>
  </NuxtLayout>
</template>
