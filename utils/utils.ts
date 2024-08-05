export const setDarkMode = (mode: boolean) => {
  console.log('setDarkMode', mode)

  const theme = mode ? "dark" : "light"

  document.documentElement.setAttribute("data-color-scheme", theme)
  localStorage.setItem("theme", theme)
}
