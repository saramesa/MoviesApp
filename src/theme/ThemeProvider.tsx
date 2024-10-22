import React, {createContext, ReactNode, FC} from 'react';
import {Theme} from '@react-navigation/native';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

interface ThemeProviderProps {
  theme: Theme;
  toggleTheme: () => void;
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  theme,
  toggleTheme,
  children,
}) => {
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
