const swiper = new Swiper(".swiper-container", {
    // Optional parameters
    direction: "vertical",
    loop: false,
    slidesPerView: 1,
    effect: 'coverflow',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    keyboard: {
        enabled: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
});
