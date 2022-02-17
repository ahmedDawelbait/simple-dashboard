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
//chat
$('.closeChat').on('click', function(){
    $('#latestChats').addClass('d-none');
    $('#conversation').removeClass('d-none');
});
$('.openchat').on('click', function(){
    $('#latestChats').removeClass('d-none');
    $('#conversation').addClass('d-none');
});
//chat
// edit profile
$('#leftItem').on('click', (e) => {
    $('#rightItem').removeClass('activeRightTab');
    $('#leftItem').addClass('activeLeftTab');
    $('#editProfile').addClass('d-none');
    $('#editPassword').removeClass('d-none');
});
$('#rightItem').on('click', (e) => {
    $('#rightItem').addClass('activeRightTab');
    $('#leftItem').removeClass('activeLeftTab');
    $('#editProfile').removeClass('d-none');
    $('#editPassword').addClass('d-none');
});
// edit profile
$(document).ready(() => {
    $(window).on('resize', () => {
        $('aside').removeClass("thumb");
        $('aside').removeClass("mobile-thumb");
    });
});
