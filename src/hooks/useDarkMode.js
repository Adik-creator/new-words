import { useLocalStorage } from './useLocalStorage'
import { useMediaQuery } from './useMediaQuery'
import { useUpdateEffect } from './useUpdateEffect'

const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)'

export const useDarkMode = (defaultValue) => {
    const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY)
    const [isDarkMode, setDarkMode] = useLocalStorage(
        'usehooks-ts-dark-mode',
        defaultValue ?? isDarkOS ?? false
    )

    useUpdateEffect(() => {
        setDarkMode(isDarkOS)
    }, [isDarkOS])

    return {
        isDarkMode,
        toggle: () => setDarkMode(prev => !prev),
        enable: () => setDarkMode(true),
        disable: () => setDarkMode(false)
    }
}