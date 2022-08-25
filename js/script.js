$(document).ready(function(){

  let moreBtn = $('.more-btn');
  let moreBtnList = $('.more-btn-list');
  moreBtn.mouseenter(function(){
    moreBtnList.stop().slideDown(100);
  })
  moreBtnList.mouseleave(function(){
    moreBtnList.stop().slideUp(200);
  })
  let login = $('.login')
  let signBox = $('.signbox')
  login.mouseenter(function(){
    signBox.stop().slideDown(100);
  })
  signBox.mouseleave(function(){
    signBox.stop().slideUp(200);
  })
});



window.onload = function(){
  
}