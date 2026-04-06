const themeToggleBtn = document.querySelector("#theme-toggle");

if (themeToggleBtn) {
  function updateButtonText() {
    const isDark = document.body.classList.contains("dark");
    themeToggleBtn.textContent = isDark
      ? "Switch to Light Mode"
      : "Switch to Dark Mode";
  }

  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    updateButtonText();
  });

  updateButtonText();
}
