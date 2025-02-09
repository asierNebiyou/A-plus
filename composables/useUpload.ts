import { ref } from "vue";

export function useUpload() {
  const isUploading = ref(false);
  const uploadFile = async (file) => {
    if (!file) throw new Error("No file selected");
    isUploading.value = true;
    try {
      const formData = new FormData();
      formData.append("file", file);
      const data = await $fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      if (!data.success) throw new Error("File upload failed");
      return data.fileUrl;
    } finally {
      isUploading.value = false;
    }
  };
  return { uploadFile, isUploading };
}
