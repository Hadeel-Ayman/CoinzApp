import { useState, useEffect, createContext, useContext } from "react";
import { useColorScheme } from "react-native";
import { DarkMode, LightMode } from "../../utills/them";
const ThemeContext = createContext(LightMode);

export const ThemeProvider = ({ children }) => {
    const ColorScheme = useColorScheme();
    const [theme, setTheme] = useState(LightMode);

    useEffect(() => {
        setTheme(ColorScheme === 'light' ? LightMode : DarkMode)
    }, [ColorScheme])

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw Error('you must use theme inside a ThemeProvider')
    }
    return context;
}