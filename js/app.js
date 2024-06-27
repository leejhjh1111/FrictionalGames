$(function(){
  $(".section2 .allbox").slick({
    slidesToShow: 3,
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
  autoplaySpeed: 2000,
  
}),
  //주메뉴 마우스오버시 서브메뉴가 개별적으로 나타남

  $(".menu li").on({
    mouseover:function(){

      $(".sub",this).stop().slideDown();


    },

    mouseout:function(){

      $(".sub",this).stop().slideUp();


    },

  })


});
