export const useFaq = () => {
  const faqs = ref([]);
  const isLoading = ref(false);
  const error = ref(null);

  const fetchFaqs = async () => {
    try {
      isLoading.value = true;
      faqs.value = await $fetch("/api/admin/faqs");
    } catch (err) {
      error.value = err.message || "Failed to load FAQs";
    } finally {
      isLoading.value = false;
    }
  };

  const addFaq = async (faq) => {
    try {
      isLoading.value = true;
      await $fetch("/api/admin/faqs", { method: "POST", body: faq });
      await fetchFaqs();
    } catch (err) {
      error.value = err.message || "Failed to add FAQ";
    } finally {
      isLoading.value = false;
    }
  };

  const updateFaq = async (faq) => {
    try {
      isLoading.value = true;
      await $fetch("/api/admin/faqs", { method: "PUT", body: faq });
      await fetchFaqs();
    } catch (err) {
      error.value = err.message || "Failed to update FAQ";
    } finally {
      isLoading.value = false;
    }
  };

  const deleteFaq = async (id) => {
    try {
      isLoading.value = true;
      await $fetch("/api/admin/faqs", { method: "DELETE", body: { id } });
      await fetchFaqs();
    } catch (err) {
      error.value = err.message || "Failed to delete FAQ";
    } finally {
      isLoading.value = false;
    }
  };

  return { faqs, fetchFaqs, addFaq, updateFaq, deleteFaq, isLoading, error };
};
