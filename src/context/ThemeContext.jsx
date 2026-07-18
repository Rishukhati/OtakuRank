import { createContext, useState } from "react";

export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
    const [darkmode, setDarkmode] = useState(false)
    const toggle = () => setDarkmode(!darkmode)
    return (
        <>
            <ThemeContext.Provider value={{ darkmode, toggle }}>
                {children}
            </ThemeContext.Provider>
        </>
    )
}