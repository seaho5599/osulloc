$(document).ready(function () {
  // 안내창 기능
  // 추가기능:  스크롤바 없에기
  $("html").css("overflow", "hiden");
  let modalWrap = $(".modal-wrap");
  let modalClose = $(".modal-close");
  modalClose.click(function () {
    modalWrap.stop().fadeOut(100);
    // 추가기능:  스크롤바 살리기
    $("html").css("overflow", "auto");
  });
  let modalMain = $(".modal-main");
  // 내용배경 클릭
  modalMain.click(function (event) {
    event.stopPropagation();
  });
  // 전체 배경 클릭
  modalWrap.click(function () {
    modalWrap.stop().fadeOut(100);
    $("html").css("overflow", "auto");
  });
  let swBanner = new Swiper(".sw-banner", {
    direction: "vertical",
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 800,
  });
  let banner = $(".banner");
  let bannerClose = $(".banner-close");
  bannerClose.click(function () {
    banner.fadeOut();
  });
  let header = $(".header");
  let depthLiA = $(".depth1 > li > a");
  let dropLiA = $(".drop > li > a");

  function headerEn() {
    header.addClass("header-hv");
    $(".logo").addClass("logo-hv");
    $(".search").addClass("search-hv");
    $(".cart").addClass("cart-hv");
    $(".more-btn").addClass("more-btn-hv");
    $(".num").addClass("num-hv");
    depthLiA.css("color", "#555");
    dropLiA.css("color", "#555");
    $(".korea").addClass("korea-hv");
  }

  function headerLe() {
    header.removeClass("header-hv");
    $(".logo").removeClass("logo-hv");
    $(".search").removeClass("search-hv");
    $(".cart").removeClass("cart-hv");
    $(".more-btn").removeClass("more-btn-hv");
    $(".num").removeClass("num-hv");
    depthLiA.css("color", "#fff");
    dropLiA.css("color", "#fff");
    $(".korea").removeClass("korea-hv");
  }
  header.mouseenter(function () {
    headerEn();
  });
  header.mouseleave(function () {
    headerLe();
  });

  $(window).scroll(function () {
    let temp = $(window).scrollTop();
    if (temp >= 618) {
      headerEn();
      $(".mb-btn").addClass("mb-btn-scroll");
    } else {
      headerLe();
      $(".mb-btn").removeClass("mb-btn-scroll");
    }
  });

  let moreBtn = $(".more-btn");
  let moreBtnList = $(".more-btn-list");
  moreBtn.mouseenter(function () {
    moreBtnList.stop().slideDown(100);
  });
  moreBtn.mouseleave(function () {
    moreBtnList.stop().slideUp(200);
  });
  let login = $(".login");
  let signBox = $(".signbox");
  let korea = $(".korea");
  let langBox = $(".langbox");
  login.mouseenter(function () {
    signBox.stop().slideDown(100);
  });
  login.mouseleave(function () {
    signBox.stop().slideUp(200);
  });
  korea.mouseenter(function () {
    langBox.stop().slideDown(100);
  });
  korea.mouseleave(function () {
    langBox.stop().slideUp(200);
  });

  let depthLi = $(".depth1 > li");
  let subMenu = $(".submenu");
  let gnbImg = $(".header .inner .header-left .gnb .depth1 > li .submenu > a");
  $.each(depthLi, function (index) {
    let temp = $(this).hasClass("depth-sub");
    $(this).mouseenter(function () {
      if (temp) {
        subMenu.hide();
        subMenu.eq(index).stop().slideDown(0);
        subMenu.addClass("submenu-hover");
        // gnbImg.css("height", "380px");
      }
    });
    $(this).mouseleave(function () {
      if (temp) {
        subMenu.eq(index).stop().slideUp(0);
        subMenu.removeClass("submenu-hover");
        // gnbImg.css("height", "0px");
      }
    });
  });

  let swVisual = new Swiper(".sw-visual", {
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
  });
  let slideNow = true;
  $(".sw-visual-pause").click(function () {
    if (slideNow) {
      slideNow = false;
      swVisual.autoplay.stop();
      $(".sw-visual-pause").addClass("sw-visual-play");
    } else {
      slideNow = true;
      swVisual.autoplay.start();
      $(".sw-visual-pause").removeClass("sw-visual-play");
    }
  });

  let swQuick = new Swiper(".sw-quick", {
    slidesPerView: 4.2,
    spaceBetween: 20,
  });
  let noticeList = $(".notice-list > li");
  let noticeTotal = noticeList.length;
  let noticeIndex = 0;
  let noticeTime = 2000;

  function showNotice() {
    noticeIndex++;
    if (noticeIndex >= noticeTotal) {
      noticeIndex = 0;
    }
    $.each(noticeList, function (item, index) {
      noticeList.hide();
      noticeList.eq(noticeIndex).show();
    });
  }
  setInterval(showNotice, noticeTime);
  let wW = window.innerWidth;
  fetch("item.json")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data)
      let html = "";
      data.forEach(function (value, index, item) {
        // console.log(value)
        html += `
        <div class="swiper-slide sw-item-slide">
          <a href="${value.link}">
              <div class="tea-img">
                <span class="tea-img-first">
                  <img src="images/${value.img}" alt="tea" class="${value.imgclass}">
                </span>
                <span class="tea-img-sec">
                  <img src = "images/${value.imghover}" alt="tea" class="${value.imghoberclass}">
                </span>
                <p class="tea-icon"></p>
              </div>
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
      html += "";
      document.getElementById("item-list").innerHTML = html;
      if (wW > 1025) {
        let swItem = new Swiper(".sw-item", {
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
        });
      }
      $(window).resize(function () {
        // let temp = $(window).width();
        let temp = window.innerWidth;
        if (temp < 1025) {
          // $(".sw-item.swiper-slide").removeAttr("style", 0);
          // $('.sw-item') = null;
          // $(".sw-item").destroy();
          $(".sw-item").hide();
        } else {
          let swItem = new Swiper(".sw-item", {
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
          });
        }
      });
    })
    .catch((err) => console.log(err));

  fetch("item2.json")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data)
      let html = "";
      data.forEach(function (value, index, item) {
        // console.log(value)
        html += `
        <div class="swiper-slide">
          <a href="${value.link}">
              <div class="tea-img">
                <span class="tea-img-first">
                  <img src="images/${value.img}" alt="tea" class="${value.imgclass}">
                </span>
                <span class="tea-img-sec">
                  <img src = "images/${value.imghover}" alt="tea" class="${value.imghoberclass}">
                </span>
              <p class="tea-icon"></p>
              </div>
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
      html += "";
      document.getElementById("item-list2").innerHTML = html;
      if (wW > 1025) {
        let swItem2 = new Swiper(".sw-item2", {
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
        });
      }
      $(window).resize(function () {
        // let temp = $(window).width();
        let temp = window.innerWidth;
        if (temp < 1025) {
          // $(".sw-item2.swiper-slide").removeAttr("style", 0);
          // $('.sw-item2') = null;
          // $(".sw-item2").destroy();
          $(".sw-item2").hide();
        } else {
          let swItem2 = new Swiper(".sw-item2", {
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
          });
        }
      });
    })
    .catch((err) => console.log(err));

  let itemBest = $(".item-best");
  let itemPop = $(".item-pop");
  let itemPopClick = itemPop.on("click", function () {
    $(".sw-item").hide();
    $(".sw-item2").show();
    $(this).css({
      "background-color": "#6C801A",
      color: "#fff",
    });
    itemBest.css({
      "background-color": "#F6F6F6",
      color: "#999",
    });
  });
  let itemBestClick = itemBest.on("click", function () {
    $(".sw-item").show();
    $(".sw-item2").hide();
    $(this).css({
      "background-color": "#6C801A",
      color: "#fff",
    });
    itemPop.css({
      "background-color": "#F6F6F6",
      color: "#999",
    });
  });
  let mbSwItem = null;
  let mbSwItem2 = null;
  if (wW <= 1025) {
    mbSwItem = new Swiper(".mb-sw-item", {
      loop: true,
      pagination: {
        el: ".mb-switem-pg",
        clickable: true,
      },
    });
    mbSwItem2 = new Swiper(".mb-sw-item2", {
      loop: true,
      pagination: {
        el: ".mb-switem-pg",
        clickable: true,
      },
    });
  }

  $(window).resize(function () {
    let temp = window.innerWidth;
    if (temp <= 1025) {
      if (mbSwItem == null) {
        mbSwItem = new Swiper(".mb-sw-item", {
          loop: true,
          pagination: {
            el: ".mb-switem-pg",
            clickable: true,
          },
        });
      }

      if (mbSwItem2 == null) {
        mbSwItem2 = new Swiper(".mb-sw-item2", {
          loop: true,
          pagination: {
            el: ".mb-switem-pg",
            clickable: true,
          },
        });
      }
    } else {
      $(".mb-sw-item .swiper-slide").removeAttr("style", 0);
      if (mbSwItem != null) {
        mbSwItem.destroy();
        mbSwItem = null;
      }
      $(".mb-sw-item2 .swiper-slide").removeAttr("style", 0);
      if (mbSwItem != null) {
        mbSwItem.destroy();
        mbSwItem = null;
      }
    }
  });

  let mbItemBest = $(".mb-item-best");
  let mbItemPop = $(".mb-item-pop");
  let mbItemPopClick = mbItemPop.on("click", function () {
    $(".mb-sw-item").hide();
    $(".mb-sw-item2").show();
    $(this).css({
      "background-color": "#6C801A",
      color: "#fff",
    });
    mbItemBest.css({
      "background-color": "#F6F6F6",
      color: "#999",
    });
  });
  let mbItemBestClick = mbItemBest.on("click", function () {
    $(".mb-sw-item").show();
    $(".mb-sw-item2").hide();
    $(this).css({
      "background-color": "#6C801A",
      color: "#fff",
    });
    mbItemPop.css({
      "background-color": "#F6F6F6",
      color: "#999",
    });
  });
  // Set the date we're counting down to
  let countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

  // Update the count down every 1 second
  let x = setInterval(function () {
    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("news-time").innerHTML =
      +hours + " : " + minutes + " : " + seconds;

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("news-time").innerHTML = "EXPIRED";
    }
  }, 1000);

  fetch("daily.json")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data)
      let html = "";
      data.forEach((value, index, item) => {
        html += `
      <div class="swiper-slide">
        <a href="${value.link}">
          <div class="daily-img-box">
          <img src="images/${value.img}" alt="">
          </div>
          <div class="daily-box">
          <h4 class="daily-title">${value.title}</h4>
          <span class="daily-every ${value.none}">${value.every}</span>
          <span class="daily-price ${value.none}">${value.price}</span>
          <span class="daily-free">${value.free}</span>
          </div>
        </a>
        <div class="daily-hover">
          <div class="daily-hover-inner">
          <div class="daily-hover-top">
            <h4 class="daily-title">${value.title}</h4>
            <span class="daily-every ${value.none}">${value.every}</span>
            <span class="daily-price ${value.none}">${value.price}</span>
            <span class="daily-free">${value.free}</span>
          </div>
          <p class="daily-hover-txt">
          ${value.txt1}
          <br>
          ${value.txt2}
          </p>
          <ul class="daily-hover-list ${value.none}">
            <li><em>${value.list}</em>${value.listsec}</li>
            <li><em>${value.list2}</em>${value.list2sec}</li> 
          </ul>
          </div>
        </div>
      </div>
      `;
      });
      html += "";
      document.getElementById("daily-list").innerHTML = html;
      let swDaily = null;
      let wW = window.innerWidth;
      if (wW <= 1025) {
        swDaily = new Swiper(".sw-daily", {
          slidesPerView: 1.3,
          spaceBetween: 10,
        });
      }
      $(window).resize(function () {
        let temp = window.innerWidth;
        if (temp <= 1025) {
          if (swDaily == null) {
            swDaily = new Swiper(".sw-daily", {
              slidesPerView: 1.3,
              spaceBetween: 10,
            });
          }
        } else {
          $(".sw-daily .swiper-slide").removeAttr("style", 0);
          if (swDaily != null) {
            swDaily.destroy();
            swDaily = null;
          }
        }
      });
    })
    .catch((err) => console.log(err));
  fetch("history.json")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data)
      let html = "";
      data.forEach((value, index, item) => {
        html += `
      <div class="swiper-slide">
        <a href="${value.link}">
        <img src="images/${value.img}" alt="메거진">
        </a>
        <span class="history-title">${value.title}</span>
        <span class="history-txt">${value.txt}</span>
      </div>
      `;
      });
      html += "";
      document.getElementById("history-list").innerHTML = html;
      let swHistory = new Swiper(".sw-history", {
        slidesPerView: 1.1,
        spaceBetween: 10,
        navigation: {
          nextEl: ".sw-history-next",
          prevEl: ".sw-history-prev",
        },
        breakpoints: {
          1025: {
            slidesPerView: 3.1, //브라우저가 1024보다 클 때
            spaceBetween: 30,
          },
        },
      });
    })
    .catch((err) => console.log(err));
});

window.onload = function () {};
