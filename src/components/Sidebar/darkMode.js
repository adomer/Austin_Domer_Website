import { useState, useEffect } from 'react'

if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

export default function useDarkMode() {
  const [theme, setTheme] = useState(localStorage.theme)
  const colorTheme = theme === 'dark' ? 'light' : 'dark'

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(colorTheme)
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme, colorTheme])

  return [colorTheme, setTheme]
}

console.log(localStorage.theme)
