export default defineNuxtPlugin(() => {
  globalThis.$fetch = $fetch.create({
    credentials: "include",
  });
});