import { ref } from 'vue';
import { k as useCookie, n as navigateTo } from './server.mjs';

function useAuth() {
  const token = useCookie("adminToken");
  const error = ref("");
  const login = async (username, password) => {
    error.value = "";
    try {
      const data = await $fetch("/api/auth/authenticate", {
        method: "POST",
        body: { username, password }
      });
      if (data == null ? void 0 : data.token) {
        token.value = data.token;
        console.log("gvbbbbvgvgvgvgvgvg", token.value);
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

export { useAuth as u };
//# sourceMappingURL=useAuth-C_xfvkwX.mjs.map
