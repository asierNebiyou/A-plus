import { ref } from 'vue';

export const useBlog = () => {
  const posts = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const fetchPosts = async () => {
    loading.value = true;
    try {
      const response = await $fetch('/api/posts');
      posts.value = response;
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  const createPost = async (postData) => {
    loading.value = true;
    try {
      const response = await $fetch('/api/posts', {
        method: 'POST',
        body: postData
      });
      return response;
    } catch (err) {
      error.value = err.message;
      throw err;
    } finally {
      loading.value = false;
    }
  };

  const updatePost = async (id, postData) => {
    loading.value = true;
    try {
      const response = await $fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: postData
      });
      return response;
    } catch (err) {
      error.value = err.message;
      throw err;
    } finally {
      loading.value = false;
    }
  };

  const deletePost = async (id) => {
    loading.value = true;
    try {
      await $fetch(`/api/posts/${id}`, {
        method: 'DELETE'
      });
    } catch (err) {
      error.value = err.message;
      throw err;
    } finally {
      loading.value = false;
    }
  };

  return {
    posts,
    loading,
    error,
    fetchPosts,
    createPost,
    updatePost,
    deletePost
  };
};