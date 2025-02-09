import { ref } from "vue";

export function useReferral() {
  const referralData = ref([]);

  const loadReferrals = async () => {
    try {
      referralData.value = await $fetch("/api/referral");
    } catch (error) {
      console.error("Error loading referrals:", error);
    }
  };

  const generateReferral = async (email) => {
    try {
      const response = await $fetch("/api/admin/referral", {
        method: "POST",
        body: { email }
      });
      referralData.value.push(response);
      return response.link;
    } catch (error) {
      console.error("Error generating referral:", error);
    }
  };

  const trackReferral = async (code, action) => {
    try {
      await $fetch("/api/referral", {
        method: "PUT",
        body: { code, action },
      });
    } catch (error) {
      console.error("Error tracking referral:", error);
    }
  };

  const deleteReferral = async (_id) => {
    try {
      await $fetch("/api/admin/referral", {
        method: "DELETE",
        body: { _id },
      });
      referralData.value = referralData.value.filter(ref => ref._id !== _id);
    } catch (error) {
      console.error("Error deleting referral:", error);
    }
  };

  return { referralData, generateReferral, loadReferrals, deleteReferral, trackReferral };
}
