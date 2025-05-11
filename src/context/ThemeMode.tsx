"use client";
import React, { createContext, useContext, useMemo, useState } from "react";

type themeMode = {
  theme: Boolean;
  ThemeMode: { toggleThemeMode: () => void };
};
type toggleThemeModeType = {
  toggleThemeMode: () => void;
};

const ThemeM: themeMode = {
  theme: false,
  ThemeMode: { toggleThemeMode: () => {} },
};

const ThemeModeContext = createContext<themeMode>(ThemeM);

const useThemeModeFunction = () => {
  const [theme, setTheme] = useState<Boolean>(false);

  useMemo(async () => {}, []);
  const ThemeMode: toggleThemeModeType = {
    toggleThemeMode: () => {
      setTheme(!theme);
    },
  };

  return { theme, ThemeMode };
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme, ThemeMode } = useThemeModeFunction();
  return (
    <ThemeModeContext value={{ theme, ThemeMode }}>
      <div className={theme ? "dark" : "light"}>{children}</div>
    </ThemeModeContext>
  );
};

export const useThemeMode = () => useContext(ThemeModeContext);
