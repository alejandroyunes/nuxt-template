export const setDarkMode = (mode: boolean) => {
  if (typeof document !== "undefined" && document.documentElement) {
    const colorScheme = mode ? "dark" : "light";
    document.documentElement.setAttribute("data-color-scheme", colorScheme);
  }

  if (typeof window !== "undefined") {
    localStorage.setItem("isDarkMode", mode.toString());
  }
};
