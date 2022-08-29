$(document).ready(function(){

  let swBanner = new Swiper('.sw-banner',{
    direction: "vertical",
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed:800
  })
  let banner = $('.banner');
  let bannerClose = $('.banner-close');
  bannerClose.click(function(){
    banner.fadeOut()
  })


  let header = $('.header')
  let depthLiA = $('.depth1 > li > a')
  let dropLiA = $('.drop > li > a')
  header.mouseenter(function(){
    header.addClass('header-hv')
    $('.logo').addClass('logo-hv')
    $('.search').addClass('search-hv')
    $('.cart').addClass('cart-hv')
    $('.more-btn').addClass('more-btn-hv')
    $('.num').addClass('num-hv')
    depthLiA.css("color","#555")
    dropLiA.css("color","#555")
    $('.korea').addClass('korea-hv')
  })
  header.mouseleave(function(){
    header.removeClass('header-hv')
    $('.logo').removeClass('logo-hv')
    $('.search').removeClass('search-hv')
    $('.cart').removeClass('cart-hv')
    $('.more-btn').removeClass('more-btn-hv')
    $('.num').removeClass('num-hv')
    depthLiA.css("color","#fff")
    dropLiA.css("color","#fff")
    $('.korea').removeClass('korea-hv')
  })

  let moreBtn = $('.more-btn');
  let moreBtnList = $('.more-btn-list');
  moreBtn.mouseenter(function(){
    moreBtnList.stop().slideDown(100);
  })
  moreBtn.mouseleave(function(){
    moreBtnList.stop().slideUp(200);
  })
  let login = $('.login');
  let signBox = $('.signbox');
  let korea = $('.korea');
  let langBox = $('.langbox');
  login.mouseenter(function(){
    signBox.stop().slideDown(100);
  })
  login.mouseleave(function(){
    signBox.stop().slideUp(200);
  })
  korea.mouseenter(function(){
    langBox.stop().slideDown(100);
  })
  korea.mouseleave(function(){
    langBox.stop().slideUp(200);
  })
  // let depthLiA = $('.depth1 > li >a');
  // let depthLi = $('.depth1 > li')
  // // let subMenu = $('.submenu');
  // $.each(depthLi, function(index){
  //     let depthLiA = $(this).find('>a');
  //     let subMenu = $(this).find('.submenu');
  //     $(this).click(function(){
  //       subMenu.hide()
  //       subMenu.stop().slideToggle();
  //     })
  // })

  let swVisual = new Swiper('.sw-visual',{
    
    loop:true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      
    },
    scrollbar: {
      el: ".sw-visual-pg",
      // hide: true,
    },
  })


});



window.onload = function(){
  
}