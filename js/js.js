$(document).ready(function () {
    let wrapperMenu = $('.header__burger-menu');

    wrapperMenu.on('click', function () {
        wrapperMenu.toggleClass('open');
    })

    let controller = new ScrollMagic.Controller();
    let videoBLock = $('video');
    let videoSector = $('.video-sector');
    let titleTop = $('.title-top');
    let titleBottom = $('.title-bottom');
    let section = $('section');

    $(section).each(function () {
        let scrollAnimation = new TimelineMax();

        scrollAnimation.to($(this).find(titleTop), {
                x: 100,
                ease: Power4.easeOut
            }, '0')
            .to($(this).find(titleBottom), {
                x: -100,
                ease: Linear.easeNone
            }, '0')
            .to($(this).find(videoBLock), {
                y: 130,
                ease: Linear.easeNone
            }, '0')
            .to($(this).find(videoSector), {
                y: 60,
                ease: Linear.easeNone
            }, '0');

        new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 'onEnter',
                duration: 1000
            })
            .setTween(scrollAnimation)
            .addIndicators()
            .addTo(controller);
    });

    section.hover(function () {
        $(this).find(titleTop).toggleClass('hover-top');
        $(this).find(titleBottom).toggleClass('hover-bottom');
    });
})
