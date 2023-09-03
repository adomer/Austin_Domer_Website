import { useState } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import useDarkMode from './darkMode.js'

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkMode()
  const [darkSide, setDarkSide] = useState(
    colorTheme === 'light' ? true : false
  )

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme)
    setDarkSide(checked)
  }

  return (
    <>
      <DarkModeSwitch
        style={{ marginBottom: '2rem' }}
        checked={darkSide}
        onChange={toggleDarkMode}
        size={35}
        moonColor="#4d4d4e"
        sunColor="#fff"
        aria-label="Dark Mode Toggle"
      />
    </>
  )
}
