$(document).ready(function(){
    $('.main-slider').owlCarousel({
        loop:false,
        navText: ['',''],
        nav:true,
        dots: true,
        mouseDrag: false,
        responsive:{
            0:{
                items:1
            }
        }
    });
    $('.toggle-menu').on('click', function(){
        $(this).parent('header').toggleClass('open');
    });

});
function map_init() {
    var myLatLng = {lat: 49.780995 , lng: 24.068909 };
    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 16,
        scrollwheel: false,
        draggable: true
    });
    var marker = new google.maps.Marker({
        map: map,
        title : 'м. Львів, Сихів, вул. Вернацького, 6',
        position: myLatLng
    });
    google.maps.event.addDomListener(window, "resize", function() {
        setTimeout(function(){
            google.maps.event.trigger(map, "resize");
            map.setCenter(myLatLng);
        },500);
    });


}