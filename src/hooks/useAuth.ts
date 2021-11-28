import { createContext, useContext, useMemo } from "react";

export interface IUserContext {
  user: any | null;
  signInWithGoogle: () => Promise<void>;
}

export const AuthContext = createContext<IUserContext>({} as IUserContext);

export const useAuth = () => {
  const context = useContext<IUserContext>(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return useMemo(
    () => ({
      user: context.user,
      signInWithGoogle: context.signInWithGoogle,
    }),
    [context.user, context.signInWithGoogle]
  );
};
