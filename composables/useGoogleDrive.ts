import { useFetch } from '#app'
import { ref } from 'vue'

export function useGoogleDrive() {
  const uploading = ref(false)

  const uploadVideo = async (file: File) => {
    uploading.value = true
    const base64File = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result.split(',')[1]); 
        });
        const response = await $fetch('/api/admin/upload', {
          method: 'POST',
          body: { file: base64File,
                  fileName: file.name,}, 
        })

    const result = await response.json()
    uploading.value = false

    if (!response.ok) {
      console.error('Upload failed:', result.error)
      return null
    }

    return result
  }

  return { uploadVideo, uploading }
}
