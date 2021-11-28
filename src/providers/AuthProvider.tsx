import React, { FC, useMemo, useState } from "react";
import { AuthContext, IUserContext } from "@app/hooks";

const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState(null);

  const memoizedValue: IUserContext = useMemo(
    () => ({
      user,
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
