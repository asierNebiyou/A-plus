import { useCookie } from "#app";

export function useAuth() {
  const token = useCookie("adminToken");
  const error = ref("");

  const login = async (username, password) => {
    error.value = "";
    try {
      const data = await $fetch("/api/auth/authenticate", {
        method: "POST",
        body: { username, password },
      });

      if (data?.token) {
        token.value = data.token;
        console.log("gvbbbbvgvgvgvgvgvg",token.value)
        return navigateTo("/admin");
      } else {
        error.value = "Invalid credentials";
      }
    } catch (err) {
      error.value = "Login failed.";
    }
  };

  const logout = () => {
    token.value = null;
    navigateTo("/login");
  };

  return { login, logout, token, error };
}
