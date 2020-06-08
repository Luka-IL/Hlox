$(document).ready(function () {
    let controller = new ScrollMagic.Controller();
    let crossTitle = $('.crossfit__title')
    let agencyTitleTop = $('.title-top')
    let agencyTitleBottom = $('.title-bottom')
    let agencyVideo = $('#agency-video')

    $('section').each(function () {
        let scrollAnimation = new TimelineMax();

        scrollAnimation.to($(this).find(agencyTitleTop), 1, {
                x: 100,
                ease: Power4.easeOut
            }, '0')
            .to($(this).find(agencyTitleBottom), 1, {
                x: -100,
                ease: Linear.easeNone
            }, '0')
            .to($(this).find('video'), 1, {
                y: 100,
                ease: Linear.easeNone
            }, '0')
            .to($(this).find('.video-sector'), 1, {
                y: 40,
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
})
