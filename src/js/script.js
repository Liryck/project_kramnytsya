function toggleSlide(item) {
    $(item).each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        });
    });
}

toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__back');

//Carousel
// $(document).ready(function(){
//     $('.catalog-item__slide').slick({
//         speed: 1200,
//         // adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg"></button>',
//     });
//   });
