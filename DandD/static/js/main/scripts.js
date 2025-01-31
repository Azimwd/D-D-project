
const main_activity__title = document.querySelector('.main-activity__title');
const main_activity__container = document.querySelector('.main-activity__container');




if (localStorage.getItem('theme') === 'dark'){
    main_activity__title.classList.add("dark-theme");
    main_activity__container.classList.add("dark-theme");
}
else{
    main_activity__title.classList.remove("dark-theme");
    main_activity__container.classList.remove("dark-theme");
}
// Обработчик переключения темы
themeToggle.addEventListener('change', () => {
    if (body.classList.contains("dark-theme")){
        main_activity__title.classList.add("dark-theme");
        main_activity__container.classList.add("dark-theme");
    }
    else{
        main_activity__title.classList.remove("dark-theme");
        main_activity__container.classList.remove("dark-theme");
    }
});