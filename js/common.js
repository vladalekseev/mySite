 $(document).ready(function(){


        $(".owl-carousel").owlCarousel({
            loop:true,
            margin:60,
            nav:true,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:1,
                    stagePadding: 150
                },
                1000:{
                    items:1,
                    stagePadding: 250
                }
            },


        });

     $(".owl-carousel .owl-nav .owl-prev").html("<img src='img/back_arrow.png' class='prev_arrow'/>");
     $(".owl-carousel .owl-nav .owl-next").html("<img src='img/forwardarrow.png' class='next_arrow'/>");

 });

