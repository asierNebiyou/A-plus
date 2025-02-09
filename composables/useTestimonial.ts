import { ref } from "vue";

export function useTestimonial() {
  const testimonialData = ref([]);
  const isLoading = ref(false);
  const error = ref(null);

  const loadTestimonial = async () => {
    isLoading.value = true;
    error.value = null;
    try {
      testimonialData.value = await $fetch("/api/testimonial");
    } catch (err) {
      console.error("Error loading testimonials:", err);
      error.value = "Failed to load testimonials.";
    } finally {
      isLoading.value = false;
    }
  };

  const addTestimonial = async (testimonial) => {
    isLoading.value = true;
    error.value = null;
    try {
      const response = await $fetch("/api/admin/testimonial", {
        method: "POST",
        body: testimonial,
      });
      testimonialData.value.push(response);
      return response;
    } catch (err) {
      console.error("Error adding testimonial:", err);
      error.value = "Failed to add testimonial.";
    } finally {
      isLoading.value = false;
    }
  };

  const deleteTestimonial = async (deleteId:number) => {
    isLoading.value = true;
    error.value = null;
    try {
      await $fetch("/api/admin/testimonial", { method: "DELETE", body: { deleteId } });
      testimonialData.value = testimonialData.value.filter((t) => t._id !== deleteId);
      await loadTestimonial()
    } catch (err) {
      console.error("Error deleting testimonial:", err);
      error.value = "Failed to delete testimonial.";
    } finally {
      isLoading.value = false;
    }
  };

  return { testimonialData, isLoading, error, addTestimonial, loadTestimonial, deleteTestimonial };
}