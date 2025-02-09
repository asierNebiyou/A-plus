<template>
  <NuxtLayout name="admin">
    <div class="p-6 max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold mb-6 text-gray-800">Manage FAQs</h1>

      <!-- FAQ Form -->
      <form
        @submit.prevent="handleSubmit"
        class="mb-6 bg-white p-4 rounded-lg shadow-md"
      >
        <h2 class="text-xl font-semibold mb-3">
          {{ isEditing ? "Edit FAQ" : "Add New FAQ" }}
        </h2>
        <input
          v-model="form.question"
          placeholder="Enter Question"
          required
          class="border p-3 rounded-lg w-full mb-3 focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <textarea
          v-model="form.answer"
          placeholder="Enter Answer"
          required
          class="border p-3 rounded-lg w-full mb-3 focus:ring-2 focus:ring-blue-500 outline-none"
        ></textarea>
        <div class="flex gap-3">
          <button
            class="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"
            :disabled="isLoading"
          >
            {{ isLoading ? "Saving..." : isEditing ? "Update FAQ" : "Add FAQ" }}
          </button>
          <button
            v-if="isEditing"
            type="button"
            @click="cancelEdit"
            class="text-gray-600 px-5 py-2 border rounded-lg hover:bg-gray-100"
          >
            Cancel
          </button>
        </div>
      </form>

      <!-- Error & Loading States -->
      <p v-if="error" class="text-red-500 mb-4">{{ error }}</p>
      <p v-if="isLoading" class="text-gray-500">Loading FAQs...</p>

      <!-- FAQ List -->
      <div v-if="faqs.length > 0" class="space-y-4">
        <div
          v-for="faq in faqs"
          :key="faq._id"
          class="bg-white p-4 rounded-lg shadow flex justify-between items-center"
        >
          <div>
            <h3 class="text-lg font-semibold text-gray-800">
              {{ faq.question }}
            </h3>
            <p class="text-gray-600">{{ faq.answer }}</p>
          </div>
          <div class="flex gap-2">
            <button
              @click="editFaq(faq)"
              class="text-blue-500 hover:text-blue-700 transition"
            >
              ✏️ Edit
            </button>
            <button
              @click="confirmDelete(faq._id)"
              class="text-red-500 hover:text-red-700 transition"
            >
              🗑 Delete
            </button>
          </div>
        </div>
      </div>
      <p v-else class="text-gray-500">No FAQs available.</p>

      <!-- Delete Confirmation Modal -->
      <Teleport to="body">
        <div
          v-if="isConfirmingDelete"
          class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 class="text-lg font-semibold text-gray-800">Are you sure?</h3>
            <p class="text-gray-600">This action cannot be undone.</p>
            <div class="mt-4 flex gap-3">
              <button
                @click="handdeleteleDelete"
                class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Yes, Delete
              </button>
              <button
                @click="isConfirmingDelete = false"
                class="text-gray-600 px-4 py-2 border rounded-lg hover:bg-gray-100"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Teleport>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useFaq } from "~/composables/useFaq";

const { faqs, fetchFaqs, addFaq, updateFaq, deleteFaq, isLoading, error } =
  useFaq();

const form = ref({ question: "", answer: "" });
const isEditing = ref(false);
const editingId = ref(null);
const isConfirmingDelete = ref(false);
const deleteId = ref(null);

const handleSubmit = async () => {
  if (isEditing.value) {
    await updateFaq({ id: editingId.value, ...form.value });
  } else {
    await addFaq(form.value);
  }
  form.value = { question: "", answer: "" };
  isEditing.value = false;
};

const editFaq = (faq) => {
  form.value = { question: faq.question, answer: faq.answer };
  editingId.value = faq._id;
  isEditing.value = true;
};

const cancelEdit = () => {
  form.value = { question: "", answer: "" };
  isEditing.value = false;
};

const confirmDelete = (id) => {
  deleteId.value = id;
  isConfirmingDelete.value = true;
};

const handleDelete = async () => {
  await deleteFaq(deleteId.value);
  isConfirmingDelete.value = false;
};

onMounted(fetchFaqs);
</script>
