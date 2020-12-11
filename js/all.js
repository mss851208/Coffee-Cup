$(document).ready(function () {
    //wow
    new WOW().init();

    //favorite 加入最愛按鈕
    $('.favorite').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('fa-heart-o').toggleClass('fa-heart');
    });

    //加入購物車
    $('.add-carts').click(function (e) {
        e.preventDefault();
        $(this).text('已加入購物車');
    });


    //加入購物車動畫
    $("#success-alert").hide();
    $('.add-carts').click(function showAlert() {
        $("#success-alert").fadeTo(1500, 500).fadeIn(500, function () {
            $("#success-alert").fadeOut(500);
        });
    });


    $('#myButton').on('click', function () {
        var $btn = $(this).button('loading');
        setTimeout(function () {
            $btn.button('reset');
        }, 5000);
    });




});