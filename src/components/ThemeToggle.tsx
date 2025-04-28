// components/ThemeToggle.tsx
'use client';

import { useTheme } from './ThemeProvider';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
      title="Not available yet, stay tuned!"
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-10 stroke-blue-300" />
      ) : (
        <Sun className="h-5 w-10 stroke-amber-300" />
      )}
    </button>
  );
}