import { ref } from "vue";

export const usePricing = () => {
  const pricingPlans = ref([]);
  const isLoading = ref(false);
  const error = ref(null);

  const fetchPlans = async () => {
    isLoading.value = true;
    try {
      pricingPlans.value = await $fetch("/api/pricing");
    } catch (e) {
      error.value = "Failed to fetch pricing plans";
    } finally {
      isLoading.value = false;
    }
  };

  const createPlan = async (plan) => {
    isLoading.value = true;
    try {
      const newPlan = await $fetch("/api/admin/pricing", {
        method: "POST",
        body: plan,
      });
      pricingPlans.value.push(newPlan);
      return newPlan;
    } catch (e) {
      error.value = "Failed to create pricing plan";
      throw e;
    } finally {
      isLoading.value = false;
    }
  };

  const updatePlan = async (id, updatedPlan) => {
    isLoading.value = true;
    try {
      const updated = await $fetch(`/api/admin/pricing`, {
        method: "PUT",
        body: {id,...updatedPlan},
      });
      const index = pricingPlans.value.findIndex((plan) => plan._id === id);
      if (index !== -1) pricingPlans.value[index] = updated;
      return updated;
    } catch (e) {
      error.value = "Failed to update pricing plan";
      throw e;
    } finally {
      isLoading.value = false;
    }
  };

  const deletePlan = async (id) => {
    isLoading.value = true;
    try {
      await $fetch(`/api/admin/pricing`, { method: "DELETE" , body: {id},});
      pricingPlans.value = pricingPlans.value.filter((plan) => plan._id !== id);
    } catch (e) {
      error.value = "Failed to delete pricing plan";
      throw e;
    } finally {
      isLoading.value = false;
    }
  };

  const getPlan = async (id) => {
    isLoading.value = true;
    try {
      pricingPlans.value = await $fetch(`/api/pricing/?id=${id}`);
    } catch (e) {
      error.value = "Failed to delete pricing plan";
      throw e;
    } finally {
      isLoading.value = false;
    }
  };



  return { pricingPlans, isLoading, error, fetchPlans,getPlan, createPlan, updatePlan, deletePlan };
};
