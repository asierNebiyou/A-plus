<template>
  <div>
    <NuxtLoadingIndicator height="5" color="#1E2755" />
    <NavBar />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
const route = useRoute();
const config = useRuntimeConfig();
const siteUrl = config.public.BASE_URL;
const fullUrl = `${siteUrl}${route.path}`;

useHead({
  title: "Best Online Tutoring | A Plus Tutoring",
  meta: [
    { property: "og:title", content: "Best Online Tutoring | A Plus Tutoring" },
    {
      property: "og:description",
      content:
        "Learn from top tutors online with A Plus Tutoring. Affordable, expert-led sessions tailored to your needs.",
    },
    { property: "og:image", content: "/public/logo-dark.png" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: fullUrl },

    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "Best Online Tutoring | A Plus Tutoring",
    },
    {
      name: "twitter:description",
      content:
        "Learn from top tutors online with A Plus Tutoring. Affordable, expert-led sessions tailored to your needs.",
    },
    { name: "twitter:image", content: "/public/logo-dark.png" },
    { name: "twitter:url", content: fullUrl },

    { rel: "canonical", href: fullUrl },
  ],
});
</script>

<style></style>
