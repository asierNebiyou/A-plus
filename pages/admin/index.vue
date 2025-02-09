<template>
  <NuxtLayout name="admin">
    <div>hello</div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { useRouter } from "nuxt/app";
const router = useRouter();
onMounted(() => {
  router.push("/admin/pricing");
});
</script>

<style></style>
