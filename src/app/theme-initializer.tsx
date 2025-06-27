// src/app/theme-initializer.tsx
"use client";
import { useEffect } from "react";
import { useThemeQuery } from "./theme-query";

export default function ThemeInitializer() {
  const { data: theme } = useThemeQuery();
  useEffect(() => {
    if (theme) {
      document.body.classList.remove("light", "dark");
      document.body.classList.add(theme);
    }
  }, [theme]);
  return null;
}