const swiper = new Swiper('.cases-slider', {
    // Настройки
    slidesPerView: 1,      // По умолчанию 1 кейс на экране
    spaceBetween: 30,     // Расстояние между ними
    loop: true,           // Бесконечный цикл
    
    // Стрелочки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    // Точки
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Адаптивность (сколько кейсов показывать на разных экранах)
    breakpoints: {
        768: {
            slidesPerView: 2, // На планшетах 2
        },
        1024: {
            slidesPerView: 3, // На компах 3
        }
    }
});