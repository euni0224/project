$(function () {
    //history.scrollRestoration = "manual"
    //인트로
    $('.postit-item').click(function(){
        $(this).toggleClass('show');
        card1 = gsap.timeline({
            defaults: {
                duration: 0.2,
            },
        })
        num=$(this).find('.card-area')
        card1
        .to(num, {'transform': 'rotate(45deg)'})
    })

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