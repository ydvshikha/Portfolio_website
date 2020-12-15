$(document).ready(
    function(){
        let $btns = $(".project-area .button-group button");

        $btns.click(function(e){
            $(".project-area .button-group button").removeClass('active');
            e.target.classList.add('active');

            let selector = $(e.target).attr('data-filter');

            $('.project-area .grid').isotope({
                filter:selector
            })

            return false;
        })

        $('.project-area .button-group #btn1').trigger('click');  //creating popup using magnific popup library

        $('.project-area .grid .test-popup-link').magnificPopup({
            type: 'image',
            gallery:{enabled:true}
          });


          //owl-carousel 

          $('.testmonial-area .owl-carousel').owlCarousel({
              loop:true,
              dots:true,
              autoplay:true,
              responsive:{
                  0:{
                      items:1
                  },
                  544:{
                      items:2
                  }
              }
          })

        //   ===============Making Navbar Fixed==================== 

          let nav_offset_top = $('.header_area').height()+20;
          function navbarFixed(){
            if($('.header_area').length){
                $(window).scroll(function(){
                    let scroll=$(window).scrollTop();
                    if(scroll>=nav_offset_top){
                        $('.header_area .main_menu').addClass('navbar-fixed');
                    }else{
                        $('.header_area .main_menu').removeClass('navbar-fixed');
                    }
                })
            }
          }
          navbarFixed();
});