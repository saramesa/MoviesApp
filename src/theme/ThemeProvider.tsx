import React, {createContext, ReactNode, FC, useMemo} from 'react';
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
  const value = useMemo(() => ({theme, toggleTheme}), [theme, toggleTheme]);
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
