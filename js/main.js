
 

$(document).ready(function(){ 


   $(".bottomSecondary").on('click', function(event) {

        event.preventDefault();
         $(this).fadeOut(500);
        $('html, body').animate({
          scrollTop: $(".whatIs, .whoIs").offset().top
        }, 800);
    });
    $(".cd-tabs__list li a").on('click', function(event) {

      event.preventDefault();
      $('html, body').animate({
        scrollTop: ($(".cd-tabs__panels").offset().top)-150
      }, 800);
  });


   var $animation_elements = $('.projectOuter');
   var $window = $(window);
   
   function check_if_in_view() {
     var window_height = $window.height();
     var window_top_position = $window.scrollTop();
     var window_bottom_position = (window_top_position + window_height);
    
     $.each($animation_elements, function() {
       var $element = $(this);
       var element_height = $element.outerHeight();
       var element_top_position = $element.offset().top;
       var element_middle_position = (element_top_position + element_height/2);
    
       //check to see if this current container is within viewport
       if (element_middle_position <= window_bottom_position) {
         $element.addClass('focused');
       } else {
         $element.removeClass('focused');
       }
     });
   }
   
   $window.on('scroll resize', check_if_in_view);
   $window.trigger('scroll');

  if($(".tab-wrapper").length !== 0){
   function sticktothetop() {
      var window_top = $(window).scrollTop();
      var top = $('#stick-here').offset().top;
      if (window_top > top) {
          $('.tab-wrapper').addClass('sticky');
          $('#stick-here').height($('.tab-wrapper').outerHeight());
      } else {
          $('.tab-wrapper').removeClass('sticky');
          $('#stick-here').height(0);
      }
  }
  
      $(window).scroll(sticktothetop);
      sticktothetop();
   }


   $('input,textarea').focus(function(){
      $(this).data('placeholder',$(this).attr('placeholder'))
             .attr('placeholder','').addClass("default");
   }).blur(function(){
      if(!$(this).val()){
         $(this).removeClass("default");
      }
      $(this).attr('placeholder',$(this).data('placeholder'));
   });


    $(".menuSandwich").on('click', function(e) {
        e.preventDefault();
        $(this).children('.sandwich').toggleClass("active");
        $('.navigationContainer').toggleClass("active");
        if($('.navigationContainer').hasClass("active")){
          $('.navigationContainer').addClass('is-visible');
        
          setTimeout(function () {
            $('.navigationContainer').addClass('is-open');
          }, 20);
          
        }else{
          $('.navigationContainer').removeClass('is-open');

          $('.navigationContainer').one('transitionend', function(e) {
            $('.navigationContainer').removeClass('is-visible');
          });
         
        }
      if($('.sandwich').hasClass('active'))
      {
        //drugi mora imat top
        if($(window).width() < 767){
          $('.sandwich').children(".sandwich-line").first().addClass("top");
          $('.sandwich').children('.sandwich-line').eq(1).removeClass("top");

        }
         $('body').addClass("fixedPosition");
         $(".headerContainer").css({"background":"rgba(0, 0, 0, 0)"," -webkit-backdrop-filter": "blur(0px)",
         "backdrop-filter": "blur(0px)"});
      }
      else
      {
        if($(window).width() < 767){
          $('.sandwich').children(".sandwich-line").first().removeClass("top");
          $('.sandwich').children('.sandwich-line').eq(1).addClass("top");
        }
        //prvi mora imat top
         $('body').removeClass("fixedPosition");
         if($(window).scrollTop() <= $('.headerContainer').outerHeight()){
         $(".headerContainer").css("background","rgba(0, 0, 0, 0)");

         }else{

            $(".headerContainer").css({"background":"rgba(0, 0, 0, 0.4)"," -webkit-backdrop-filter": "blur(15px)",
            "backdrop-filter": "blur(15px)"});
         }
      }
      });
      //if scroll
      var lastScrollTop = 0, delta = 15;
      
      $(window).scroll(function(event){
         var st = $(this).scrollTop();
         
         if(Math.abs(lastScrollTop - st) <= delta)
            return;
            if(st <= $('.headerContainer').outerHeight()){
        $(".headerContainer").css({"background":"rgba(0, 0, 0, 0)","transition":" ease .5s"," -webkit-backdrop-filter": "blur(0px)",
        "backdrop-filter": "blur(0px)"});
            }
            else{
        $(".headerContainer").css({"background":"rgba(0, 0, 0, 0.4)","transition":" ease .5s"," -webkit-backdrop-filter": "blur(15px)",
        "backdrop-filter": "blur(15px)"});
       

            }
 
           
  if ((st > lastScrollTop) && (lastScrollTop>0) || $(".tab-wrapper").hasClass("sticky")) {
         // downscroll code
        $(".headerContainer").css({"top":"-100%","transition":" ease .5s"});
    
     } else {
        // upscroll code
        $(".headerContainer").css({"top":"0%","transition":" ease .5s"});
     }
         lastScrollTop = st;
      });
    
     

      $('.project').each(function(i, obj) {
        $(this).on("mouseover", function() {        
           if($(this).prev().hasClass("thumb-hover-info-project") && !$(this).prev().hasClass("active")){
            $(this).prev().addClass("active");

         }
         hoverVideo(i);
         
      });
        $(this).on("mouseout", function() { 
           if($(this).prev().hasClass("thumb-hover-info-project") && $(this).prev().hasClass("active")){
            $(this).prev().removeClass("active");

         }
           hideVideo(i);
         });
    });

    function hoverVideo(i) {  
      $(".videoplay")[i].play(); 
    }
    
    function hideVideo(i) {
      $('.videoplay')[i].currentTime = 0; 
    }

    $('.imageWrapper a').on('openstart.fluidbox',function(){
      $('body').addClass("fixedPosition");

    }).on('closeend.fluidbox',function(){
      $('body').removeClass("fixedPosition");

    }).fluidbox({
      viewportFill: 1,
    maxWidth: 0,
    loader:false,
    
   });

 
});


