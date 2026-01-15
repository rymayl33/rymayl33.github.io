  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("theme-toggle");
    if (!toggle) return;
  
    const isDark = document.documentElement.classList.contains("dark");
    toggle.setAttribute("aria-pressed", isDark);
  
    toggle.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");
      const nowDark = document.documentElement.classList.contains("dark");
  
      localStorage.setItem("theme", nowDark ? "dark" : "light");
      toggle.setAttribute("aria-pressed", nowDark);
    });
  });
  