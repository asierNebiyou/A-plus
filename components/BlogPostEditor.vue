<template>
  <div class="bg-white rounded-2xl shadow-xl p-6 mb-8">
    <h2 class="text-2xl font-semibold mb-6">Create New Blog Post</h2>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2"
          >Title</label
        >
        <input
          v-model="post.title"
          type="text"
          class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#92A75A] focus:border-transparent"
          required
        />
      </div>

      <div class="grid grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Cover Image
          </label>
          <div
            class="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center"
            @dragover.prevent
            @drop.prevent="handleDrop"
          >
            <input
              type="file"
              ref="fileInput"
              class="hidden"
              accept="image/*"
              @change="handleFileSelect"
            />
            <div v-if="!post.coverImage" class="space-y-2">
              <svg
                class="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <button
                type="button"
                class="text-[#92A75A] hover:text-[#7b8f4c] font-medium"
                @click="$refs.fileInput.click()"
              >
                Upload cover image
              </button>
            </div>
            <img
              v-else
              :src="post.coverImage"
              class="mx-auto max-h-48 rounded-lg"
            />
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Additional Media
          </label>
          <div class="border-2 border-dashed border-gray-300 rounded-lg p-4">
            <input
              type="file"
              ref="mediaInput"
              class="hidden"
              accept="image/*,video/*"
              multiple
              @change="handleMediaSelect"
            />
            <button
              type="button"
              class="w-full text-[#92A75A] hover:text-[#7b8f4c] font-medium"
              @click="$refs.mediaInput.click()"
            >
              Upload images/videos
            </button>
            <div class="grid grid-cols-3 gap-2 mt-4">
              <div
                v-for="(media, index) in post.media"
                :key="index"
                class="relative aspect-square"
              >
                <img
                  v-if="media.type.includes('image')"
                  :src="media.url"
                  class="w-full h-full object-cover rounded-lg"
                />
                <video
                  v-else
                  :src="media.url"
                  class="w-full h-full object-cover rounded-lg"
                ></video>
                <button
                  @click="removeMedia(index)"
                  class="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                >
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2"
          >Content</label
        >
        <div class="border rounded-lg">
          <editor-content :editor="editor" class="prose max-w-none p-4" />
        </div>
      </div>

      <div class="flex justify-end space-x-4">
        <button
          type="button"
          @click="resetForm"
          class="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="px-6 py-2 bg-[#92A75A] text-white rounded-lg hover:bg-[#7b8f4c] transform transition-transform hover:scale-105"
        >
          Publish Post
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import { storage, db } from "@/firebase/config";
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const post = ref({
  title: "",
  content: "",
  coverImage: null,
  media: [],
});

const editor = useEditor({
  content: "",
  extensions: [StarterKit],
});

const handleFileSelect = async (event) => {
  const file = event.target.files[0];
  if (file) {
    const imageRef = storageRef(
      storage,
      `blog/covers/${Date.now()}-${file.name}`
    );
    await uploadBytes(imageRef, file);
    post.value.coverImage = await getDownloadURL(imageRef);
  }
};

const handleMediaSelect = async (event) => {
  const files = Array.from(event.target.files);
  for (const file of files) {
    const mediaRef = storageRef(
      storage,
      `blog/media/${Date.now()}-${file.name}`
    );
    await uploadBytes(mediaRef, file);
    const url = await getDownloadURL(mediaRef);
    post.value.media.push({
      type: file.type,
      url,
    });
  }
};

const handleDrop = async (event) => {
  const file = event.dataTransfer.files[0];
  if (file && file.type.includes("image")) {
    const imageRef = storageRef(
      storage,
      `blog/covers/${Date.now()}-${file.name}`
    );
    await uploadBytes(imageRef, file);
    post.value.coverImage = await getDownloadURL(imageRef);
  }
};

const removeMedia = (index) => {
  post.value.media.splice(index, 1);
};

const handleSubmit = async () => {
  try {
    await addDoc(collection(db, "blog-posts"), {
      ...post.value,
      content: editor.value.getHTML(),
      createdAt: serverTimestamp(),
    });
    resetForm();
  } catch (error) {
    console.error("Error publishing post:", error);
  }
};

const resetForm = () => {
  post.value = {
    title: "",
    content: "",
    coverImage: null,
    media: [],
  };
  editor.value?.commands.setContent("");
};

onBeforeUnmount(() => {
  editor.value?.destroy();
});
</script>
