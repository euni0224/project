$(function () {
    history.scrollRestoration = "manual"
    //인트로
    $('.postit-item').click(function(){
        $(this).toggleClass('show');
    })
})