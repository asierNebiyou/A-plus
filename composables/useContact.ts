
import { ref } from "vue";

export const useContact = () => {
  const contactInfo = ref({});
  const isLoading = ref(false);

  const fetchContactInfo = async () => {
    isLoading.value = true;
    try {
      contactInfo.value = await $fetch("/api/contactInfo");
    } catch (error) {
      console.error("Failed to fetch contact information:", error);
    } finally {
      isLoading.value = false;
    }
  };

  const updateContactInfo = async (formData) => {
    isLoading.value = true;
    try {
      await $fetch("/api/contactInfo", {
        method: "PUT",
        body: formData,
      });
      await fetchContactInfo();
    } catch (error) {
      console.error("Failed to update contact information:", error);
    } finally {
      isLoading.value = false;
    }
  };

  const deleteFile=async(fileurl)=>{
    isLoading.value = true;
    await $fetch(`/api/admin/delete-file?fileurl=${encodeURIComponent(fileurl)}`, {
        method: "DELETE",
      });
  }

  return { contactInfo, isLoading, fetchContactInfo, updateContactInfo ,deleteFile};
};
