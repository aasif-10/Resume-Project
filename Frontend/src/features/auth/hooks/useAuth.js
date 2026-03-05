import { useContext } from "react";
import { login, logout, register } from "../services/auth-api";
import { AuthContext } from "../auth-context";

export const useAuth = () => {
  const context = useContext(AuthContext);
  const { user, setUser, loading, setLoading } = context;

  const handleLogin = async (email, password) => {
    setLoading(true);

    const data = await login(email, password);
    setUser(data.user);
    setLoading(false);
  };

  const handleRegister = async (username, email, password) => {
    setLoading(true);

    const data = await register(username, email, password);

    setUser(data.user);
    setLoading(false);
  };

  const handleLogout = async () => {
    setLoading(true);

    // eslint-disable-next-line no-unused-vars
    const data = await logout();

    setUser(null);
    setLoading(false);
  };

  return { user, loading, handleLogin, handleLogout, handleRegister };
};
