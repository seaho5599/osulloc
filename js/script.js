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

  function headerEn() {
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

  function headerLe() {
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
    if (temp >= 618) {
      headerEn();
    } else {
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
      let html = ''
      data.forEach(function (value, index, item) {
        // console.log(value)
        html += `
        <div class="swiper-slide">
          <a href="${value.link}">
              <img src="images/${value.img}" alt="tea" class="${value.imgclass}">
              <p class="tea-name">${value.title}</p>
              <p class="tea-origin ${value.originclass}">${value.origin}</p>
              <p class="tea-price">${value.price}</p>
              <span class="tea-sale ${value.saleclass}">${value.sale}</span>
              <br>
              <p class="tea-new ${value.newclass}">${value.new}</p>
              </a>
              </div>
        `;

      });
      html += '';
      document.getElementById('item-list').innerHTML = html;
      let swItem = new Swiper('.sw-item', {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 20,
        centeredSlides: true,
        observer: true,
        observeParents: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".sw-item-next",
          prevEl: ".sw-item-prev",
        },
      })
    })
    .catch(err => console.log(err))

  fetch("item2.json")
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      let html = ''
      data.forEach(function (value, index, item) {
        // console.log(value)
        html += `
        <div class="swiper-slide">
          <a href="${value.link}">
              <img src="images/${value.img}" alt="tea" class="${value.imgclass}">
              <p class="tea-name">${value.title}</p>
              <p class="tea-origin ${value.originclass}">${value.origin}</p>
              <p class="tea-price">${value.price}</p>
              <span class="tea-sale ${value.saleclass}">${value.sale}</span>
              <br>
              <p class="tea-new ${value.newclass}">${value.soldout}</p>
              
              </a>
              </div>
        `;

      });
      html += '';
      document.getElementById('item-list2').innerHTML = html;
      let swItem = new Swiper('.sw-item2', {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 20,
        centeredSlides: true,
        observer: true,
        observeParents: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".sw-item-next",
          prevEl: ".sw-item-prev",
        },
      })
    })
    .catch(err => console.log(err))

  let itemBest = $('.item-best');
  let itemPop = $('.item-pop');
  itemPop.click(function () {
    $('.sw-item').hide()
    $('.sw-item2').show()
    $(this).css({'background-color': '#6C801A' ,'color':'#fff'})
    itemBest.css({'background-color': '#F6F6F6' ,'color':'#999'})
  })
  itemBest.click(function(){
    $('.sw-item').show()
    $('.sw-item2').hide()
    $(this).css({'background-color': '#6C801A' ,'color':'#fff'})
    itemPop.css({'background-color': '#F6F6F6' ,'color':'#999'})
  })
  // Set the date we're counting down to
  let countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

  // Update the count down every 1 second
  let x = setInterval(function () {

    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("news-time").innerHTML = +hours + " : " +
      minutes + " : " + seconds;

    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("news-time").innerHTML = "EXPIRED";
    }
  }, 1000);

});



window.onload = function () {

}