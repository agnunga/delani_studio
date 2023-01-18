
// $(".description-section").click(function(){
//     $('.design-description').addClass('d-block').removeClass('d-none');
//     $('.design-image').addClass('d-none').removeClass('d-block');
// });

function show_description(a){
    if(a == 1){
        if ($('p.d-none').length) {
            $('.design-description1').addClass('d-block').removeClass('d-none');
            $('.design-image1').addClass('d-none').removeClass('d-block');
        }else{
            $('.design-description1').addClass('d-none').removeClass('d-block');
            $('.design-image1').addClass('d-block').removeClass('d-none');
        }
    }
    else if (a == 2){
        if ($('p.d-none').length) {
            $('.design-description2').addClass('d-block').removeClass('d-none');
            $('.design-image2').addClass('d-none').removeClass('d-block');
        }else{
            $('.design-description2').addClass('d-none').removeClass('d-block');
            $('.design-image2').addClass('d-block').removeClass('d-none');
        }
    }
    else if (a == 3){
        if ($('p.d-none').length) {
            $('.design-description3').addClass('d-block').removeClass('d-none');
            $('.design-image3').addClass('d-none').removeClass('d-block');
        }else{
            $('.design-description3').addClass('d-none').removeClass('d-block');
            $('.design-image3').addClass('d-block').removeClass('d-none');
        }
    }
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

