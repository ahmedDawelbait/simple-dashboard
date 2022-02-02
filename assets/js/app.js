$('.close').on('click', (e) => {
    $('aside').removeClass("mobile-thumb");
});
$('.fa-bars').on('click', (e) => {
    if(window.innerWidth > 991){
       $('li[class="active"]').css({display:'block'});
       $('aside').toggleClass("thumb");
       if($('aside').hasClass("thumb")){ 
            $('.sidebar').css({height:document.body.scrollHeight+'px'});
            $('.sidebar').removeClass('sticky');
        }else{
            $('.sidebar').css({height:$(window).height()+'px'});
            $('.sidebar').addClass('sticky');
        }
    }else{
       $('aside').toggleClass("mobile-thumb");
    }
});
$('.navItem').on('click', (e) => {
    let dropdown = e.currentTarget;
    if(!dropdown.getAttribute('data-toggle')){
        return 1;
    }
    let menu    = e.currentTarget.children[1];
    if($('li[class="active"]').css('display') != 'none'){
        $('li[class="active"]').css({display:'none'});
    }else{
        $('li[class="active"]').css({display:'block'});
    }
    menu.classList.toggle('show');
});
$(document).ready(() => {
    $(window).on('resize', () => {
        $('aside').removeClass("thumb");
        $('aside').removeClass("mobile-thumb");
    });
});
