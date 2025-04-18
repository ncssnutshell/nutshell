// Initialize theme
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.dataset.theme = savedTheme;
    updateToggleText(savedTheme);
    console.log("Theme initialized to:", savedTheme);
}

// Toggle theme
function toggleTheme() {
    const currentTheme = document.body.dataset.theme;
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.body.dataset.theme = newTheme;
    localStorage.setItem('theme', newTheme);
    updateToggleText(newTheme);
    console.log("Theme changed to:", newTheme);
}

// Update button text
function updateToggleText(theme) {
    const toggle = document.getElementById('darkModeToggle');
    if (toggle) {
        toggle.textContent = theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    
    const toggle = document.getElementById('darkModeToggle');
    if (toggle) {
        toggle.addEventListener('click', toggleTheme);
    }
    
    // Debugging
    console.log("All elements:", {
        body: document.body,
        toggle: document.getElementById('darkModeToggle'),
        theme: document.body.dataset.theme
    });
});