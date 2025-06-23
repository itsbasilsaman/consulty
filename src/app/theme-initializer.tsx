// src/app/theme-initializer.tsx
"use client";
import { useEffect } from "react";
import { useThemeQuery } from "./theme-query";

export default function ThemeInitializer() {
  const { data: theme } = useThemeQuery();
  useEffect(() => {
    if (theme) {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(theme);
    }
  }, [theme]);
  return null;
}