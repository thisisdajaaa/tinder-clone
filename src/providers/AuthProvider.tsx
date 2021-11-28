import React, { FC, useMemo, useState } from "react";
import * as Google from "expo-google-app-auth";
import { AuthContext, IUserContext } from "@app/hooks";
import { GoogleAuthProvider, signInWithCredential } from "@firebase/auth";
import { auth } from "@app/config/firebase";

const config = {
  androidClientId:
    "451559533969-9729k1toq3t59cjghrd1lrqbdll3omcg.apps.googleusercontent.com",
  iosClientId:
    "451559533969-74lnfklpc1uitjmevdf3fb6eojqbe300.apps.googleusercontent.com",
  scopes: ["profile", "email"],
  permissions: ["public_profile", "email", "gender", "location"],
};

const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState(null); // temporary value, should be initially null

  const signInWithGoogle = async () => {
    try {
      const result = await Google.logInAsync(config);

      if (result.type === "success") {
        const { idToken, accessToken } = result;
        const credential = GoogleAuthProvider.credential(idToken, accessToken);

        await signInWithCredential(auth, credential);
      }

      return Promise.reject();
    } catch (error) {
      console.error(error);
    }
  };

  const memoizedValue: IUserContext = useMemo(
    () => ({
      user,
      signInWithGoogle,
    }),
    [user]
  );

  return (
    <AuthContext.Provider value={{ ...memoizedValue }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
