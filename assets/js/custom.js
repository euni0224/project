$(function () {
    history.scrollRestoration = "manual"
    //인트로
    gsap.set('body', { overflow: 'hidden',})
    gsap.set('.cursor', { visibility: 'hidden',})
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
    .to('.cursor',{'visibility': 'visible'})
    

    //프로젝트 호버시 링크 카드 보이기
    $('.slide-item').hover(function(){
        $(this).toggleClass('active')
    })

    // 필터
    $('.slide-item').addClass('on');
    $('button').click(function(e){
        e.preventDefault();
        const buttonDate = $(this).data('filter')
        const $btn =$(this);
        const $slideItems = $('.slide-item');
        $btn.addClass('on').siblings().removeClass('on');
        if (buttonDate === 'all') {
            $slideItems.addClass('on');
        } else {
            $slideItems.removeClass('on');
            $slideItems.each(function(i,slideItem){
                if(slideItem?.dataset?.filter?.split(',')?.map(filter => filter?.trim())?.includes(buttonDate)){
                    slideItem.classList.add('on');
                }
            })
        }
    })


    //프로젝트 스크롤 효과
    gsap.to('.hd-introduction',{
        scrollTrigger:{
            trigger:'.hd-introduction',
            start:'0% 0%',
            end:'100% 0%',
            scrub:0,
        },
        ease:'none',
        yPercent:100
    })


    // 마우스
    $(window).mousemove(function(e){
        e.preventDefault();
        gsap.to('.cursor',{
            x:e.clientX,
            y:e.clientY,
            duration:.2,
        })
    })

    $('[data-hover]').hover(function(){
        $('.cursor').addClass('cursor-over')

    },function(){
        $('.cursor').removeClass('cursor-over')

    })

})