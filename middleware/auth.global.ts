import { useCookie } from "#app";
export default defineNuxtRouteMiddleware((to) => {
  if (to.path.startsWith("/admin")) {
    const token = useCookie("adminToken");
    console.log("kjkkkkkkkkkkkkkk",token.value)
    if (!token.value) return navigateTo("/login");
  }
});
