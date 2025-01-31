// base
const header__menu = document.querySelector('.header__menu');
const themeToggle = document.getElementById('theme-toggle');
const themeLabel = document.getElementById('theme-label');
const body = document.body;

// Загрузка темы из локального хранилища
const savedTheme = localStorage.getItem('theme');


// Проверка и установка темы при загрузке
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add("dark-theme");
    themeLabel.textContent = 'Светлая тема';
} else {
    body.classList.remove("dark-theme");
    themeLabel.textContent = 'Темная тема';
}

// Обработчик переключения темы
themeToggle.addEventListener('change', () => {
    if (body.classList.contains("dark-theme")) {
        body.classList.remove("dark-theme");
        themeLabel.textContent = 'Темная тема';
        localStorage.setItem("theme", "light");
    } else {
        body.classList.add("dark-theme");
        themeLabel.textContent = 'Светлая тема';
        localStorage.setItem("theme", "dark");
    }
});
