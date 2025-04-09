// Initialize theme
function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.dataset.theme = savedTheme;
  updateToggleText(savedTheme);
}

// Toggle theme
function toggleTheme() {
  const currentTheme = document.body.dataset.theme;
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.body.dataset.theme = newTheme;
  localStorage.setItem("theme", newTheme);
  updateToggleText(newTheme);
}

// Update button text
function updateToggleText(theme) {
  const toggle = document.getElementById("darkModeToggle");
  if (toggle) {
    toggle.textContent = theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";

    // Language-specific toggles
    if (document.documentElement.lang === "ar") {
      toggle.textContent =
        theme === "dark" ? "☀️ الوضع المضيء" : "🌙 الوضع المظلم";
    } else if (document.documentElement.lang === "de") {
      toggle.textContent =
        theme === "dark" ? "☀️ Heller Modus" : "🌙 Dunkler Modus";
    } else if (document.documentElement.lang === "fr") {
      toggle.textContent =
        theme === "dark" ? "☀️ Mode Clair" : "🌙 Mode Sombre";
    }
  }
}

// Initialize when page loads
document.addEventListener("DOMContentLoaded", () => {
  initTheme();

  const toggle = document.getElementById("darkModeToggle");
  if (toggle) {
    toggle.addEventListener("click", toggleTheme);
  }
});
// Switch between First & second semester
function openSemester(semesterId) {
  // Hide all semester content sections
  const semesterContents = document.getElementsByClassName("semester-content");
  for (let i = 0; i < semesterContents.length; i++) {
    semesterContents[i].style.display = "none";
  }

  // Remove 'active' class from all tab buttons
  const tabButtons = document.getElementsByClassName("tab-button");
  for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active");
  }

  // Show the selected semester content
  document.getElementById(semesterId).style.display = "block";

  // Add 'active' class to the clicked button
  event.currentTarget.classList.add("active");
}
