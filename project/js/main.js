'use strict'

$(function(){


  //--------------- backToTop部分の動き---------------------------

    const backToTop =　$("#back-to-top");
    $(window).scroll(function () {
      let scrollVallue = $(this).scrollTop();
      console.log(scrollVallue);
      const windowHeight = $(this).height();

      if(scrollVallue > windowHeight) {
        backToTop.addClass("in");
      }else{
        backToTop.removeClass("in");
      }
    });

      backToTop.click(function(){
        $("html, body").animate({
            scrollTop: 0
        },500);
      });

    });

    //----------------- logoの動き----------------

    $(window).scroll(function () {
      let scrollVallue = $(this).scrollTop();
      console.log(scrollVallue);
      const windowHeight = $(this).height();

      if(scrollVallue > windowHeight) {
        $(".logo").addClass("in");
      }else{
        $(".logo").removeClass("in");
      }
    });




//---------------- About部分の動き-------------------

      $(window).scroll(function(){

        let scrollValue = $(this).scrollTop();

        $(".about").each(function(){
          let triggerPoint = $(this).offset().top -$(window).height()/2;
          if(scrollValue > triggerPoint){
               $(this).find(".about-movie").addClass("in");
               $(this).find(".about-text").addClass("in");
             }

        });
      });

// ----------------Activities部分の動き-----------
$(window).scroll(function(){

  let scrollValue = $(this).scrollTop();

  $(".activity").each(function(){
    let triggerPoint = $(this).offset().top -$(window).height()/2;
    if(scrollValue > triggerPoint){
         $(this).find(".activity-item").addClass("up");
       }

  });
});
