<script setup>
import { ref, onMounted } from "vue";
import { useAdmin } from "@/composables/useAdmin";

const { admins, loadAdmins, registerAdmin, updateAdmin, deleteAdmin } =
  useAdmin();

const newUsername = ref("");
const newPassword = ref("");
const editUsername = ref("");
const editPassword = ref("");
const editingAdminId = ref(null);
const showEditModal = ref(false);

onMounted(loadAdmins);

const register = async () => {
  await registerAdmin(newUsername.value, newPassword.value);
  newUsername.value = "";
  newPassword.value = "";
};

const startEdit = (admin) => {
  editingAdminId.value = admin._id;
  editUsername.value = admin.username;
  editPassword.value = "";
  showEditModal.value = true;
};

const update = async () => {
  await updateAdmin(
    editingAdminId.value,
    editUsername.value,
    editPassword.value
  );
  editingAdminId.value = null;
  showEditModal.value = false;
};
</script>

<template>
  <NuxtLayout name="admin">
    <div class="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md mt-6">
      <h2 class="text-3xl font-semibold text-center mb-6 text-gray-800">
        Admin Management
      </h2>

      <!-- Register Admin -->
      <div class="flex gap-3 mb-6">
        <input
          v-model="newUsername"
          class="border border-gray-300 p-3 rounded-md flex-grow"
          placeholder="New Username"
        />
        <input
          v-model="newPassword"
          type="password"
          class="border border-gray-300 p-3 rounded-md flex-grow"
          placeholder="New Password"
        />
        <button
          @click="register"
          class="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
        >
          Register
        </button>
      </div>

      <!-- Admins Table -->
      <div class="overflow-x-auto bg-gray-50 rounded-lg shadow">
        <table class="min-w-full">
          <thead>
            <tr class="bg-gray-200 text-gray-700">
              <th class="py-3 px-4 text-left">ID</th>
              <th class="py-3 px-4 text-left">Username</th>
              <th class="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="admin in admins" :key="admin._id" class="border-t">
              <td class="py-3 px-4">{{ admin._id }}</td>
              <td class="py-3 px-4">{{ admin.username }}</td>
              <td class="py-3 px-4 flex justify-center gap-2">
                <button
                  @click="startEdit(admin)"
                  class="p-2 rounded-md bg-yellow-500 hover:bg-yellow-600 transition"
                >
                  <svg
                    class="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11 19l-4 1 1-4L16.5 7.5a2.12 2.12 0 113 3L11 19z"
                    ></path>
                  </svg>
                </button>
                <button
                  @click="deleteAdmin(admin._id)"
                  class="p-2 rounded-md bg-red-500 hover:bg-red-600 transition"
                >
                  <svg
                    class="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Edit Modal -->
      <div
        v-if="showEditModal"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div class="bg-white p-6 rounded-lg shadow-lg w-96">
          <h3 class="text-xl font-semibold mb-4">Edit Admin</h3>
          <input
            v-model="editUsername"
            class="border border-gray-300 p-3 rounded-md w-full mb-2"
            placeholder="Username"
          />
          <input
            v-model="editPassword"
            type="password"
            class="border border-gray-300 p-3 rounded-md w-full mb-4"
            placeholder="New Password (optional)"
          />
          <div class="flex justify-end gap-2">
            <button
              @click="update"
              class="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
            >
              Update
            </button>
            <button
              @click="showEditModal = false"
              class="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
