$(document).ready(function ($) {

    document.addEventListener( 'wpcf7mailsent', function( event ) {
        var inputs = event.detail.inputs;
        thankyouPage = getFieldValueByName(inputs, "thankyou-page");
        if(thankyouPage) window.location = thankyouPage;
    }, false );


    $(document).click(function(event) { 
        $target = $(event.target);
        if(!$target.closest('.panel').length && !$target.closest('.button').length) {
            $(".panel").removeClass('open');   
        }

        if(!$target.closest('.dropdown-selector').length) {
            $(".dropdown-selector .dropdown").slideUp('fast');
        }

    });


    $(".hamburger").on('click', function(event) {
        event.preventDefault();
       $(this).toggleClass('is-active');
       $("header.mobile .dropdown").slideToggle();

    });

    $(".mobile-menu .menu-item-has-children >a").on('click', function(event) {
        event.preventDefault();
        var subMenu = $(this).closest('li').find('>.sub-menu');
        subMenu.slideToggle();
    });


    $(".panel .part-top, .panel .close, .panel .part-top, .panel .close-mobile").on('click', function(event) {
        var container = $(this).closest(".panel");
        container.toggleClass('open');
    });

    $("header.mobile .button.right").on('click', function(event) {
        var container = $(".panel-right");
        $(".hamburger").click();
         container.addClass('open');
    });

    $("header.mobile .button.left").on('click', function(event) {
        var container = $(".panel-left");
        $(".hamburger").click();
         container.addClass('open');
    });


    $(".dropdown-selector .title").on('click', function(event) {
        var dropdown = $(this).parent().find(".dropdown");
        dropdown.slideToggle('fast');
    });

    $(".dropdown-selector .dropdown .item").on('click', function(event) {
        var dropdown = $(this).closest(".dropdown");
        dropdown.find(".item").removeClass("active");
        $(this).addClass('active');
        dropdown.slideUp('fast');

        var html = $(this).html();
        selector = $(this).closest(".dropdown-selector");
        selector.find(".title .item").html(html);
    });

    $(".subcat-selector .item").on('click', function(event) {
        $(this).toggleClass('active');
    });

    $(".parameters-selector .item").on('click', function(event) {
        $(this).toggleClass('active');
    });

   $(" .filter-toggle").on('click', function(event) {
        $(".sidebar.mobile").slideToggle();
    });


});

function getFieldValueByName(ar, name){
    var result = "";
    ar.forEach(function(item) {
        if(item.name == name) result = item.value;
    });
    return result;
}