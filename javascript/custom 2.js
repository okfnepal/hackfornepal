$(window).scroll(function(){
    var wscroll = $(this).scrollTop();
    if(wscroll > 50){
        $(".navbar").addClass("shrink-nav");
        $(".navbar-brand").addClass("shrink-navbar-brand");

    }
    else{
        $(".navbar").removeClass("shrink-nav");
        $(".navbar-brand").removeClass("shrink-navbar-brand");
    }
});



$(function() {
    $('.navbar-main li a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 800);
                return false;
            }
        }
    });
});
