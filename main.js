const toggleBtn = document.getElementById("toggleTheme");

function updateToggleButton(theme) {
  toggleBtn.setAttribute("aria-pressed", theme === "dark");
  toggleBtn.textContent = theme === "dark" ? "🌙 Dark Mode" : "🌞 Light Mode";
}

toggleBtn.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateToggleButton(newTheme);
});

window.addEventListener("DOMContentLoaded", () => {
  const storedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", storedTheme);
  updateToggleButton(storedTheme);
});
