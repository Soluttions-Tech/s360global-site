import { createContext, useContext, useState } from 'react';

type Theme = 'dark' | 'light';

interface ThemeCtx {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeCtx>({ theme: 'dark', toggleTheme: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>('dark');
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme: () => setTheme(t => t === 'dark' ? 'light' : 'dark') }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
