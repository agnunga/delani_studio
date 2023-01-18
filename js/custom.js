
// $(".description-section").click(function(){
//     $('.design-description').addClass('d-block').removeClass('d-none');
//     $('.design-image').addClass('d-none').removeClass('d-block');
// });

function show_description(){
    $('.design-description').addClass('d-block').removeClass('d-none');
    $('.design-image').addClass('d-none').removeClass('d-block');
}


$(document).ready(function () {
    $('#wb_Image3 img').hover(function () {
        $(this).stop().animate({
            opacity: .4
        }, 10);
        $('.portfolio-text').removeClass('hide');
    }, function () {
        $(this).stop().animate({
            opacity: 1
        }, 500);
        $('.portfolio-text').addClass('hide');
    });
});

