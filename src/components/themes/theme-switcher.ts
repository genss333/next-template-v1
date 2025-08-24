export const themeSwitcher = () => {
  const theme = localStorage.getItem("theme");
  let isDark: boolean;

  if (theme === "dark") isDark = true;
  else if (theme === "light") isDark = false;
  else isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  document.documentElement.classList.toggle("dark", isDark);
};

export const light = () => {
  localStorage.setItem("theme", "light");
  themeSwitcher();
};

export const dark = () => {
  localStorage.setItem("theme", "dark");
  themeSwitcher();
};

export const system = () => {
  localStorage.setItem("theme", "system");
  themeSwitcher();
};

export const removeTheme = () => {
  localStorage.removeItem("theme");
  themeSwitcher();
};
