const searchMobile = () => {
    const btnFiltro = document.querySelector('.act_filtro_mobile');
    const containerFiltro = document.querySelector('.filtro_proyectos');

    $(btnFiltro).click(function(){
        $(containerFiltro).slideToggle().css('display', 'flex')
    })
}

const heroProyectos = () => {
    /* SLIDER THUMBS */
    let swiper = new Swiper(".mySwiper", {
        direction: "vertical",
        spaceBetween: 10,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesProgress: true,
    });

    /* SLIDER SOLO */
    let swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
}