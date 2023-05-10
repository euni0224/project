$(function () {
    history.scrollRestoration = "manual"
    //인트로
    gsap.set('body', { overflow: 'hidden'})
    intro = gsap.timeline({
        defaults: {
            duration: 0.6,
        }
    })
    intro
    .addLabel('b')
    .addLabel('c')
    .to('.hd-intro .intro-list .bg1', { yPercent: -10 },'b')
    .to('.hd-intro .intro-list .bg2', {delay: 0.1, yPercent: -8 },'b')
    .to('.hd-intro .intro-list .bg3', { delay: 0.2, yPercent: -6 },'b')
    .to('.hd-intro .intro-list .bg1', { delay: 0.25,yPercent: -100 },'b')
    .to('.hd-intro .intro-list .bg2', {delay: 0.35, yPercent: -100 },'b')
    .to('.hd-intro .intro-list .bg3', { delay: 0.45, yPercent: -100 },'b')
    .to('.hd-intro .intro-list .bg3 span',{yPercent: -110,stagger:0.3})
    .addLabel('a')
    .to('.hd-intro .intro-list .bg3', { delay: 1,yPercent: -200 },'a')
    .to('.hd-intro .intro-list .bg2', {delay: 1.15, yPercent: -200 },'a')
    .to('.hd-intro .intro-list .bg1', {delay: 1.25, yPercent: -200 },'a')
    .to('.hd-intro .hd-bg', {delay: 1.3, yPercent: -100 },'a')
    .to('.hd-intro', {delay: 1.3, yPercent: -100 },'a')
    .to('.intro-bottom', {delay: 1., yPercent: -100 },'a')
    .to('body',{'overflow': 'auto'})
    

    // 프로젝트 슬라이드


})