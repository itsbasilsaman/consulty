"use client"

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const THEME_KEY = 'theme';

function getInitialTheme(): 'light' | 'dark' {
    if(typeof window !== 'undefined'){
        const stored = localStorage.getItem(THEME_KEY);
        if(stored === 'light' || stored === 'dark') return stored;
        if(window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    }
    return 'light'
}

export function useThemeQuery(){
    return useQuery({
        queryKey: [THEME_KEY],
        queryFn: () => {
            if(typeof window !== 'undefined') {
                return getInitialTheme()
            }
            return 'light';
        },
        initialData: getInitialTheme,
    })
}

export function useToggleThemeMutation() {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: async (current: 'light' | 'dark') => {
        const next = current === 'light' ? 'dark' : 'light';
        if (typeof window !== 'undefined') {
          localStorage.setItem(THEME_KEY, next);
          document.documentElement.classList.remove('light', 'dark');
          document.documentElement.classList.add(next);
        }
        return next;
      },
      onSuccess: (data) => {
        queryClient.setQueryData([THEME_KEY], data);
      },
    });
  }