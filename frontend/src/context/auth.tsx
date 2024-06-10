import type React from "react";
import { createContext, useContext, useState } from "react";

export type SessionData = {
  username: string;
  email: string;
  token: string;
};

type AuthContextType = {
  session: SessionData;
  setSession: React.Dispatch<React.SetStateAction<SessionData>>;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [session, setSession] = useState<SessionData>({} as SessionData);

  return (
    <AuthContext.Provider value={{ session, setSession }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  return useContext(AuthContext);
};
