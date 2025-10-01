import { createContext, useContext, useState } from "react";

const themeContext = createContext();
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const themeContextValue = {
    theme,
    setTheme,
  };
  return (
    <themeContext.Provider value={themeContextValue}>
      {children}
    </themeContext.Provider>
  );
};
const useThemeContext = () => useContext(themeContext);
export { ThemeProvider, useThemeContext };

/*
import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

// Define the shape of your context value
interface ThemeContextType {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

// Provide a default value (can be null initially or a default object)
const themeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>("light");

  const themeContextValue: ThemeContextType = {
    theme,
    setTheme,
  };

  return (
    <themeContext.Provider value={themeContextValue}>
      {children}
    </themeContext.Provider>
  );
};

export { themeContext, ThemeProvider };
*/
