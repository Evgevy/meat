const initGo = () => {
    const tabMenu = document.querySelector('.header__tab-menu');
    const buttonAssortment = document.querySelector('.header__button');

    // Флаг для отслеживания состояния
    let isMoved = false;

    // Функция для перемещения .header__tab-menu
    function moveTabMenu() {
        const isMobileView = window.innerWidth <= 1150;

        if (isMobileView && !isMoved) {
            // Перемещение в .header__button, если еще не там
            buttonAssortment.parentElement.insertBefore(tabMenu, buttonAssortment.nextSibling);
            isMoved = true; // Устанавливаем флаг, что уже переместили
        } else if (!isMobileView && isMoved) {
            // Перемещение обратно на место, если нужно
            const mainNav = document.querySelector('.main-nav');
            mainNav.appendChild(tabMenu);
            isMoved = false; // Сбрасываем флаг
        }
    }

    // Первоначальное перемещение
    moveTabMenu(); // Вызываем сразу, чтобы установить нужное положение

    // Добавление обработчика события изменения размера
    window.addEventListener('resize', moveTabMenu);

}

// Экспорт функции инициализации
export { initGo };