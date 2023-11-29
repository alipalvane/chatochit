import { createContext, useCallback, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [registerInfo, setRegisterInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const upadteRegisterInfo = useCallback((info) => {
    setRegisterInfo(info);
  }, []);
  return (
    <AuthContext.Provider value={{ user, registerInfo, upadteRegisterInfo }}>
      {children}
    </AuthContext.Provider>
  );
};
