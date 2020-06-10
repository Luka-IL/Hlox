$(document).ready(function () {
    
    //Burger menu
    
    let wrapperMenu = $('.header__burger-menu');
    let navigationMenu = $('.header__navigation');
    let body = $('body')

    wrapperMenu.on('click', function () {
        wrapperMenu.toggleClass('open')
        navigationMenu.toggleClass('navigation-animation');
        body.toggleClass('overflow-hidden')
    })
    
    //Scroll animation
    
    let controller = new ScrollMagic.Controller();
    let videoBLock = $('video');
    let videoSector = $('.video-sector');
    let titleTop = $('.title-top');
    let titleBottom = $('.title-bottom');
    let section = $('section');

    $(section).each(function () {
        let scrollAnimation = new TimelineMax();

        scrollAnimation.to($(this).find(titleTop), {
                x: 80,
                ease: Power4.easeOut
            }, '0')
            .to($(this).find(titleBottom), {
                x: -80,
                ease: Linear.easeIn
            }, '0')
            .to($(this).find(videoBLock), {
                y: 80,
                ease: Linear.easeIn
            }, '0')
            .to($(this).find(videoSector), {
                y: 50,
                ease: Linear.easeIn
            }, '0');

        new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 'onEnter',
                duration: 1000
            })
            .setTween(scrollAnimation)
            //.addIndicators()
            .addTo(controller);
    });
    
    //Hover Title

    section.hover(function () {
        $(this).find(titleTop).toggleClass('hover-top');
        $(this).find(titleBottom).toggleClass('hover-bottom');
    });
    
    
    
    
    
})
