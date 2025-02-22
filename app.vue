<script setup>
const route = useRoute();
const { trackReferral } = useReferral();
import { useRouter } from "vue";

const router = useRouter();
const loading = useLoadingIndicator();

router.beforeEach(() => {
  loading.start();
});

router.afterEach(() => {
  loading.finish();
});

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
