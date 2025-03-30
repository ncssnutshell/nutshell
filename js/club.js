// Initialize theme
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.dataset.theme = savedTheme;
    updateToggleText(savedTheme);
}

// Toggle theme
function toggleTheme() {
    const currentTheme = document.body.dataset.theme;
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.body.dataset.theme = newTheme;
    localStorage.setItem('theme', newTheme);
    updateToggleText(newTheme);
}

// Update button text
function updateToggleText(theme) {
    const toggle = document.getElementById('darkModeToggle');
    if (toggle) {
        toggle.textContent = theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
        
        // Language-specific toggles
        if (document.documentElement.lang === 'ar') {
            toggle.textContent = theme === 'dark' ? '☀️ الوضع المضيء' : '🌙 الوضع المظلم';
        } else if (document.documentElement.lang === 'de') {
            toggle.textContent = theme === 'dark' ? '☀️ Heller Modus' : '🌙 Dunkler Modus';
        } else if (document.documentElement.lang === 'fr') {
            toggle.textContent = theme === 'dark' ? '☀️ Mode Clair' : '🌙 Mode Sombre';
        }
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    
    const toggle = document.getElementById('darkModeToggle');
    if (toggle) {
        toggle.addEventListener('click', toggleTheme);
    }
});