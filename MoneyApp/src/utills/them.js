import Colors from './colors';

export const LightMode = {
    colors: {
        primary: Colors.dark.dark,
        background: Colors.dark.light
    }
}
export const DarkMode = {
    ...LightMode,
    colors: {
        ...LightMode.colors,
        primary: Colors.dark.light,
        background: Colors.dark.dark
    }
}