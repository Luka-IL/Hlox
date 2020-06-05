$(document).ready(function() {
    let controller = new ScrollMagic.Controller();
    let crossTitle = $('.crossfit__title')
    let agencyTitleTop = $('.agency__title-top')
    let agencyTitleBottom = $('.agency__title-bottom')
    let agencyVideo = $('#agency-video')
    
    let windowHeight = $(window).height();
    
    let scrollAnimation = new TimelineMax();
    scrollAnimation.to(agencyTitleTop, 1, {xPercent:15, ease: Power4.easeOut}, '0')
    .to(agencyVideo, 1, {y:100, ease:Linear.easeNone},'0')
    .to(agencyTitleBottom, 1, {x:-100, ease:Linear.easeNone}, '0');

    new ScrollMagic.Scene({triggerElement: '#agency-video', triggerHook:'onEnter', duration:1000})
    .setTween(scrollAnimation)
    .addTo(controller);
})