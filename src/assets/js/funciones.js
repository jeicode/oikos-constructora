const changeTab = () => {
    const catg = document.querySelectorAll(".botonpfc");
    const infCatg = document.querySelectorAll(".info");

    console.log(catg)

    let selectCatg = null;

    catg.forEach((pest) => {
        pest.addEventListener("click", (e) => {
            catg.forEach((el) => {
                el.classList.remove("active");
            });
            e.currentTarget.classList.toggle("active");

            selectCatg = pest.getAttribute("ncol");

            infCatg.forEach((infel) => {
                if (infel.getAttribute("ncol") === selectCatg) {
                    infel.classList.add("active");
                    infel.classList.remove("oculto");
                } else {
                    infel.classList.remove("active");
                    infel.classList.add("oculto");
                }
            });
        });
    });
}

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

    let swiper3 = new Swiper(".swiperPlanos", {
        slidePerView:1,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
    });

    let swiper4 = new Swiper(".swiperTipologia", {
        slidePerView:1,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
    });

    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    });

    $(".js-modal-btn").modalVideo();

    const btnAside = document.querySelectorAll('.progress_state .state');

    $(btnAside).click(function(){
        $(btnAside).removeClass('active');
        $(btnAside).find('span').removeClass('fa-circle');
        $(btnAside).find('span').addClass('fa-circle-notch');
        
        $(this).addClass('active');
        $(this).find('span').removeClass('fa-circle-notch');
        $(this).find('span').addClass('fa-circle');
    });

    const btn1 = document.querySelectorAll('.btn_calc_1'); 
    // const btn2 = document.querySelector('.btn_calc_2'); 

    const backButtonCalculadora = document.querySelector('.close_calc span');
    const modalCalculadora = document.querySelector('.s_modal_calculadora');
    const bg_dark = document.querySelector('.bg_dark');

    $(backButtonCalculadora).click(function(){
        $(bg_dark).fadeOut();
        $(modalCalculadora).removeClass('active');
    });

    $(bg_dark).click(function(){
        $(bg_dark).fadeOut();
        $(modalCalculadora).removeClass('active');
    });

    $(btn1).click(function(){
        $(bg_dark).fadeIn();
        $(modalCalculadora).addClass('active');
    });

    let swiper5 = new Swiper(".swiperCalcP", {
        slidesPerView: 1,
        loop:true,
        autoplay:{
            delay:6000,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            clickable:true,
            el: ".swiper-pagination",
        },
    });
}