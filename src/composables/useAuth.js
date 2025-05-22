import { ref } from "vue";
import { useRouter } from "vue-router";

export function useAuth() {
  const user = ref(null);
  const isAuthenticated = ref(false);
  const isLoading = ref(false);
  const error = ref(null);
  const router = useRouter();

  const login = async (email, password) => {
    isLoading.value = true;
    error.value = null;

    try {
      // Simulando chamada da API
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulando login bem-sucedido
      user.value = { email };
      isAuthenticated.value = true;
      router.push("/");
    } catch (e) {
      error.value = "Credenciais inválidas";
      throw e;
    } finally {
      isLoading.value = false;
    }
  };

  const logout = () => {
    user.value = null;
    isAuthenticated.value = false;
    router.push("/login");
  };

  return {
    user,
    isAuthenticated,
    isLoading,
    error,
    login,
    logout,
  };
}
