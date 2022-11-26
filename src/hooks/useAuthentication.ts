import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { useState, useEffect } from "react";
import { app } from "../firebase/config";
import { useNavigate } from "react-router-dom";
interface iRegisterUserData {
  displayName?: string;
  email: string;
  password: string;
}
export const useAuthentication = () => {
  const [error, setError] = useState<string | null | boolean>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth(app); // As informações de usuário vem no currentUser do retorno dessa função
  const checkIfIsCancelled = () => {
    if (cancelled) {
      return;
    }
  };

  const createUser = async (data: iRegisterUserData) => {
    checkIfIsCancelled();

    setLoading(true);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await updateProfile(user, {
        displayName: data.displayName,
      });

      return user;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
        console.log(typeof error.message);

        if (error.message.includes("Password")) {
          setError("A senha precisa conter pelo menos 6 caracteres.");
        } else if (error.message.includes("email-already")) {
          setError("E-mail já cadastrado.");
        } else {
          setError("Ocorreu um erro, por favor tenta mais tarde.");
        }
      }
    } finally {
      setLoading(false);
    }
  };
  const login = async (data: iRegisterUserData) => {
    checkIfIsCancelled();

    setLoading(true);
    setError(false);

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);

      navigate("/dashboard");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
        console.log(typeof error.message);
        console.log(error.message.includes("user-not"));
        if (error.message.includes("user-not-found")) {
          setError("Usuário não encontrado.");
        } else if (error.message.includes("wrong-password")) {
          setError("Senha incorreta.");
        } else {
          setError("Ocorreu um erro, por favor tenta mais tarde.");
        }
      }
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);
  return {
    auth,
    createUser,
    error,
    loading,
    login,
  };
};
