export interface ThemeType {
  colors: {
    background: string;
    text: string;
    primary: string;
    secondary: string;
  };
}

export const lightTheme: ThemeType = {
  colors: {
    background: '#ffffff',
    text: '#000000',
    primary: '#6200ee',
    secondary: '#03dac4',
  },
};

export const darkTheme: ThemeType = {
  colors: {
    background: '#000000',
    text: '#ffffff',
    primary: '#bb86fc',
    secondary: '#03dac4',
  },
};