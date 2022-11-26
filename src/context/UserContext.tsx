import { createContext } from "react";
import { useEffect, useState } from "react";
import {
  Auth,
  getAuth,
  onAuthStateChanged,
  signOut,
  User,
} from "firebase/auth";
import { app } from "../firebase/config";

export const UserContext = createContext({} as iUserContextValues);
const auth = getAuth(app);

interface iUserContextValues {
  user: User | undefined | null;
  trigger: boolean;
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
  loading: any;
  auth: Auth;
}
interface iUserContextProps {
  children: React.ReactNode;
}
export const UserProvider = ({ children }: iUserContextProps) => {
  const [user, setUser] = useState<User | undefined | null>(undefined);
  const [trigger, setTrigger] = useState<boolean>(false);

  const loading = user === undefined;
  useEffect(() => {
    onAuthStateChanged(auth, (user) => setUser(user));
  }, [auth]);

  return (
    <UserContext.Provider value={{ user, trigger, setTrigger, loading, auth }}>
      {children}
    </UserContext.Provider>
  );
};
