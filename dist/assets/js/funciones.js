const changeTab = () => {
    const catg = document.querySelectorAll(".botonpfc");
    const infCatg = document.querySelectorAll(".info");

    let selectCatg = null;

    catg.forEach((pest) => {
        pest.addEventListener("click", (e) => {
            catg.forEach((el) => {
                el.classList.remove("active");
            });
            e?.currentTarget.classList.toggle("active");

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
    swiper2.on('activeIndexChange', function (e) {
        // pause iframes videos yt
        $('.iframe_video_gallery').each(function(){
            this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
        });
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
        'wrapAround': true,
        'alwaysShowNavOnTouchDevices': true,
        'disableScrolling': true,
        'positionFromTop': 250
    });

    const btnAside = document.querySelectorAll('.progress_state .state');

    $(btnAside).click(function(){
        $(btnAside).removeClass('active');
        $(btnAside).find('span').removeClass('fa-circle');
        $(btnAside).find('span').addClass('fa-circle-notch');
        
        $(this).addClass('active');
        $(this).find('span').removeClass('fa-circle-notch');
        $(this).find('span').addClass('fa-circle');
    });

    // const btn1 = document.querySelectorAll('.btn_calc_1'); 
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
    swiper5.on('activeIndexChange', function (e) {
        // pause iframes videos yt
        $('.iframe_video_gallery_2').each(function(){
            this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
        });
    });

}

const bannerProyectos = () => {
    let swiper = new Swiper(".swiperFuturos", {
        autoplay: {
            delay: 8000,
        },
        slidesPerView:1,
        effect: "fade",
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}

const bannerEjecutados = () => {
    let swiper = new Swiper(".swiperPe", {
        autoplay: {
            delay: 8000,
        },
        loop:true,
        slidesPerView:1,
        effect: "fade",
        pagination: {
            clickable:true,
            el: ".swiper-pagination",
        },
    });
    

    /* FUNCION TABS PROYECTOS EJECUTADOS */

    const tabLogo = document.querySelectorAll('.tab_logo_eject');
    const containerProyecto = document.querySelectorAll('.cont_proyecto_eject');
    let comparador = null;

    tabLogo.forEach((logo) => {
        logo.addEventListener('click', (e) => {

            
            tabLogo.forEach((el) => {
                el.classList.remove('active');
            });
            e.currentTarget.classList.add('active');
            comparador = e.currentTarget.dataset.proyecto;

            containerProyecto.forEach((cont) => {
                if(cont.dataset.proyecto === comparador){
                    cont.classList.add('active');
                }else{
                    cont.classList.remove('active');
                }
            });
        })
    });
}