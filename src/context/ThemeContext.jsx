import {createContext, useContext, useEffect, useState} from "react"

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext(undefined)

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("context error")
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const toggleTheme = () => {
    setIsDarkMode((prevState) => !prevState)
  }
  useEffect(() => {
    const root = document.documentElement
    if (isDarkMode) {
      root.classList.add("dark-theme")
    } else {
      root.classList.remove("dark-theme")
    }
  }, [isDarkMode])
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}