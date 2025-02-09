import { ref } from "vue";

const API_BASE_URL = "/api/auth/admin";

export function useAdmin() {
  const admins = ref([]);

  const loadAdmins = async () => {
    try {
      admins.value = await $fetch(API_BASE_URL);
    } catch (error) {
      console.error("Error loading admins:", error);
    }
  };

  const registerAdmin = async (username, password) => {
    try {
      const response = await $fetch(API_BASE_URL, {
        method: "POST",
        body: { username, password },
      });
      admins.value.push(response);
      return response;
    } catch (error) {
      console.error("Error registering admin:", error);
    }
  };

  const updateAdmin = async (id, updatedData) => {
    try {
      const response = await $fetch(`${API_BASE_URL}/${id}`, {
        method: "PUT",
        body: updatedData,
      });
      const index = admins.value.findIndex((admin) => admin.id === id);
      if (index !== -1) admins.value[index] = response;
      return response;
    } catch (error) {
      console.error("Error updating admin:", error);
    }
  };

  const deleteAdmin = async (id) => {
    try {
      await $fetch(`${API_BASE_URL}/${id}`, { method: "DELETE" });
      admins.value = admins.value.filter((admin) => admin.id !== id);
    } catch (error) {
      console.error("Error deleting admin:", error);
    }
  };

  return { admins, loadAdmins, registerAdmin, updateAdmin, deleteAdmin };
}
