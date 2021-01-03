$(document).ready(function() {
    // ta3del header height
    $(".header").height($(window).height())
    $(window).resize(function() {
            $(".header").height($(window).height())
        })
        // 

    // lma adoos 3la 7aga ta5od el class da w t5tfy mn ely gambo

    $(".links li ").click(function() {
            $(this).addClass("active").siblings().removeClass("active")
        })
        // 


    // 34an kol 7aga troo7 llmortabta beha lma adoos 3leeha
    $(".links li a").click(function() {

            $("html,body").animate({
                scrollTop: $("#" + $(this).data("value")).offset().top

            }, 1000)
        })
        // 


    //  start mixitup

    $("#con").mixItUp();
    // 


    // start scroll-to-top

    var scrollToTop = $(".scroll-to-top i")

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 1000) {
            scrollToTop.fadeIn(500)
        } else {
            scrollToTop.fadeOut(500)
        }

    })

    $(".scroll-to-top i").click(function(event) {
            event.preventDefault();

            $("html,body").animate({
                scrollTop: 0,

            }, 1000)
        })
        // 



    //     // start popup
    $(".service .show").click(function() {
        $(".popup").fadeIn()
    })
    $(".popup").click(function() {
        $(this).fadeOut()
    })



    //34an lma adoos 3la 7aga gowa el pox da my5tfeee4
    $(".popup,.inner").click(function(e) {
            e.stopPropagation()

        })
        // 


    $(".close").click(function(e) {
            e.preventDefault()
            $(".popup").fadeOut()
        })
        //     // zorraar el boot el f awl saf7a

    $(".boot").click(function() {
        $(this).animate({
            top: "-=20px",
        }, 500)
    })
    $(".boot").click(function() {
        $(this).animate({
            top: "+=20px",
        }, 500)
    })


    // 

    // zorraar el bounce

    $(".bounce").click(function() {
        $(this).animate({
            top: "-=30px",
        }, 500)
    })
    $(".bounce").click(function() {
            $(this).animate({
                top: "+=30px",
            }, 500)
        })
        // 


    // start counterUp
    $(".num").counterUp({
        // delay: 10,
        time: 3000
    });

    // 

    // start slick slider
    // $('.slider').slick({
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // });

    // 


    // start aoi animation

    AOS.init({
        // offset: 120, // offset (in px) from the original trigger point
        delay: 100, // values from 0 to 3000, with step 50ms
        duration: 1500, // values from 0 to 3000, with step 50ms
        easing: "ease-in-out", // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        // mirror: true, // whether elements should animate out while scrolling past them
    });

    // 


    //  start nice scroll     34an a8yr f 4akl el scroll

    // $(function() {
    //     $("body").niceScroll({
    //         cursorcolor: "#1abc9c",
    //         cursorborder: "none",
    //     });
    // });


    // start toggle

    var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
    var collapseList = collapseElementList.map(function(collapseEl) {
        return new bootstrap.Collapse(collapseEl)
    })
    $(".vv").click(function() {
            $(".card-body").slideToggle(600)
        })
        // 

})