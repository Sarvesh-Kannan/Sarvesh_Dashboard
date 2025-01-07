document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  themeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-theme");
      body.classList.toggle("light-theme");

      // Update button text
      if (body.classList.contains("dark-theme")) {
          themeToggle.textContent = "Switch to Light Mode";
      } else {
          themeToggle.textContent = "Switch to Dark Mode";
      }
  });
});
