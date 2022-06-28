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

//Modal

$('.button_top').on('click', function(){
    $('.overlay, #order').fadeIn('slow');
});

$('.modal__close').on('click', function(){
    $('.overlay, #order, #thanks').fadeOut('slow');
});

$('.button_mini').each(function(i) {
    $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
    });
});

 //Validate form

 function valideForms(form) {
    $(form).validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: "required"
        },
        messages: {
            name: {
                required: "Будь-ласка, введіть своє ім'я",
                minlength: jQuery.validator.format("Введіть як мінімум {0} символи!")
            },
            phone: "Будь-ласка, введіть свій телефон"
        }
    });
}

valideForms('#order form');

$('input[name=phone]').mask("(099) 999-9999");

// Sending email
$('form').submit(function(e) {
    e.preventDefault();                 //відмінити стандартну поведінку браузера

    if(!$(this).valid()) {
        return;                         //заборона відправки пустої форми
    }

    $.ajax({                            //технологія обміну данними без перезавантаження сторінки
        type: "POST",                   //відправка
        url: "mailer/smart.php",        //файл для роботи з сервером
        data: $(this).serialize()       //вказуємо яку інформацію відправляємо на сервер
    }).done(function() {                //обробка відповіді від сервера
        $(this).find("input").val("");  //очистити поля форми
        $('#order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');

        $('form').trigger('reset');     //оновити форму
    });
    return false;                       //повторити, якщо помилка
});