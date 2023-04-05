$(function () {
    history.scrollRestoration = "manual"
    //인트로
    //gsap.set('body', { overflow: 'hidden'})
    intro = gsap.timeline({
        defaults: {
            duration: 0.6,
        }
    })
    intro
    .addLabel('b')
    .to('.hd-intro .intro-list .bg1', { yPercent: -10 },'b')
    .to('.hd-intro .intro-list .bg2', {delay: 0.1, yPercent: -8 },'b')
    .to('.hd-intro .intro-list .bg3', { delay: 0.2, yPercent: -6 },'b')
    .to('.hd-intro .intro-list .bg1', { delay: 0.25,yPercent: -100 },'b')
    .to('.hd-intro .intro-list .bg2', {delay: 0.35, yPercent: -100 },'b')
    .to('.hd-intro .intro-list .bg3', { delay: 0.45, yPercent: -100 },'b')
    .to('.hd-intro .intro-list .bg3 span',{yPercent: -110,stagger:0.3,})
    .addLabel('a')
    .to('.hd-intro .intro-list .bg3', { yPercent: -200 },'a')
    .to('.hd-intro .intro-list .bg2', {delay: 0.15, yPercent: -200 },'a')
    .to('.hd-intro .intro-list .bg1', {delay: 0.25, yPercent: -200 },'a')
    

    // 프로젝트 슬라이드
    var swiper2 = new Swiper(".pro", {
        slidesPerView: 1.2,
        spaceBetween:30,
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
            },
    });
})