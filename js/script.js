$(document).ready(function () {

  let swBanner = new Swiper('.sw-banner', {
    direction: "vertical",
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 800
  })
  let banner = $('.banner');
  let bannerClose = $('.banner-close');
  bannerClose.click(function () {
    banner.fadeOut()
  })
  let header = $('.header')
  let depthLiA = $('.depth1 > li > a')
  let dropLiA = $('.drop > li > a')
  function headerEn(){
    header.addClass('header-hv')
    $('.logo').addClass('logo-hv')
    $('.search').addClass('search-hv')
    $('.cart').addClass('cart-hv')
    $('.more-btn').addClass('more-btn-hv')
    $('.num').addClass('num-hv')
    depthLiA.css("color", "#555")
    dropLiA.css("color", "#555")
    $('.korea').addClass('korea-hv')
  }
  function headerLe(){
    header.removeClass('header-hv')
    $('.logo').removeClass('logo-hv')
    $('.search').removeClass('search-hv')
    $('.cart').removeClass('cart-hv')
    $('.more-btn').removeClass('more-btn-hv')
    $('.num').removeClass('num-hv')
    depthLiA.css("color", "#fff")
    dropLiA.css("color", "#fff")
    $('.korea').removeClass('korea-hv')
  }
  header.mouseenter(function () {
    headerEn();
  })
  header.mouseleave(function () {
    headerLe()
  })

  $(window).scroll(function () {
    let temp = $(window).scrollTop();
    if(temp >= 618){
      headerEn();
    }else{
      headerLe();
    }
  })

  let moreBtn = $('.more-btn');
  let moreBtnList = $('.more-btn-list');
  moreBtn.mouseenter(function () {
    moreBtnList.stop().slideDown(100);
  })
  moreBtn.mouseleave(function () {
    moreBtnList.stop().slideUp(200);
  })
  let login = $('.login');
  let signBox = $('.signbox');
  let korea = $('.korea');
  let langBox = $('.langbox');
  login.mouseenter(function () {
    signBox.stop().slideDown(100);
  })
  login.mouseleave(function () {
    signBox.stop().slideUp(200);
  })
  korea.mouseenter(function () {
    langBox.stop().slideDown(100);
  })
  korea.mouseleave(function () {
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

  let swVisual = new Swiper('.sw-visual', {

    loop: true,
    effect: "fade",
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".sw-visual-next",
      prevEl: ".sw-visual-prev",
    },
    pagination: {
      el: ".sw-visual-pg",
    },
  })
  let slideNow = true
  $('.sw-visual-pause').click(function () {
    if (slideNow) {
      slideNow = false
      swVisual.autoplay.stop();
      $('.sw-visual-pause').addClass('sw-visual-play')
    } else {
      slideNow = true
      swVisual.autoplay.start();
      $('.sw-visual-pause').removeClass('sw-visual-play')
    }
  })
  let noticeList = $('.notice-list > li')
  let noticeTotal = noticeList.length
  let noticeIndex = 0
  let noticeTime = 2000

  function showNotice() {
    noticeIndex++;
    if (noticeIndex >= noticeTotal) {
      noticeIndex = 0
    }
    $.each(noticeList, function (item, index) {
      noticeList.hide()
      noticeList.eq(noticeIndex).show()
    })
  }
  setInterval(showNotice, noticeTime)

  fetch("item.json")
    .then(res => res.json())
    .then(data => {
      // console.log(data)
    })
    .catch(err => console.log(err))

  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'item.json');
  xhr.send();
  xhr.onreadystatechange = function (e) {
    // 서버의 응답 체크
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    // 이 아래부분은 서버에서 응답이 왔을 때만 실행됩니다.
    // 서버가 살아있고(200)
    if (xhr.status == 200) {
      // console.log(xhr.responseText);     
      // 수신 내용은 String ----> Object 
      let data = JSON.parse(xhr.responseText);
      let html = ``;
      data.forEach(function (value, index, item) {
        console.log(value);
        html += `
          <div class="swiper-slide">
          <a href="${value.link}">
                  <img src="images/${value.img}" alt="">
                  <p class="tea-name">${value.title}</p>
                  <p class="tea-origin">${value.origin}</p>
                  <p class="tea-price">${value.price}</p>
                  <span class="tea-sale">${value.sale}</span>
                  <br>
                  <p class="tea-new">${value.new}</p>
                </a>
                </div>
          `;
      });
      document.getElementById('item-list').innerHTML = html;
    } else {
      console.log(`${xhr.status} : ${xhr.statusText}`);
    }
  }

  let swItem = new Swiper('.sw-item', {
    loop: true,
    
    slidesPerView: 5,
    spaceBetween: 20,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  })
});



window.onload = function () {

}