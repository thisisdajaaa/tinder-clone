import { createContext, useContext } from "react";

export interface IUserContext {
  user: any | null;
}

export const AuthContext = createContext<IUserContext>({} as IUserContext);

const useAuth = () => {
  const context = useContext<IUserContext>(AuthContext);

  if (context === undefined) {
    throw new Error("useToastContext must be used within a ToastProvider");
  }

  return { ...context };
};

export default useAuth;
