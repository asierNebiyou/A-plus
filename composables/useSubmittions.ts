import { ref } from "vue";

const API_BASE_URL = "/api/consultations";

export function useConsultation() {
  const consultations = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const loadConsultations = async () => {
    loading.value = true;
    error.value = null;
    try {
      consultations.value = await $fetch(API_BASE_URL);
    } catch (err) {
      error.value = "Failed to load consultations: " + err.message;
    } finally {
      loading.value = false;
    }
  };

  const addConsultation = async (consultation) => {
    error.value = null;
    loading.value=true
    try {
      await $fetch(API_BASE_URL, {
        method: "POST",
        body: consultation,
      });
      await loadConsultations();
    } catch (err) {
      error.value = "Failed to add consultation: " + err.message;
    }
  };

 
  const updateConsultation = async (id, updates) => {
    error.value = null;
    try {
      await $fetch(`${API_BASE_URL}/${id}`, {
        method: "PUT",
        body: updates, 
      });
      await loadConsultations(); 
    } catch (err) {
      error.value = "Failed to update consultation: " + err.message;
    }
  };

  const deleteConsultation = async (id) => {
    error.value = null;
    try {
      await $fetch(`${API_BASE_URL}/${id}`, { method: "DELETE" });
      await loadConsultations(); 
    } catch (err) {
      error.value = "Failed to delete consultation: " + err.message;
    }
  };

  return { consultations, loadConsultations, addConsultation, updateConsultation, deleteConsultation, loading, error };
}
