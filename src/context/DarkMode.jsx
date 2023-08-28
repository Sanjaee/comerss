import { Children, createContext, useState } from "react";

const DarkModeContex = createContext();

const DarkModeContexProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return <DarkModeContex.Provider value={{ isDarkMode, setIsDarkMode }}>{children}</DarkModeContex.Provider>;
};

export const DarkMode = DarkModeContex;
export default DarkModeContexProvider;
