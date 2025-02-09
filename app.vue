<script setup>
const route = useRoute();
const { trackReferral } = useReferral();

onMounted(async () => {
  const refCode = route.query.ref;
  if (refCode) {
    await trackReferral(refCode, "home-page-visit");
  }
});
</script>
<template>
  <div>
    <NuxtPage />
  </div>
</template>
