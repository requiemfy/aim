$(document).ready(function () {
  // location.href = "#home"
  $(window).on('beforeunload', function () {
    $('body').hide();
    $(window).scrollTop(0);
  });

  function addEffect(_class) {
    $('.navbar.sticky').addClass(_class);
    $('.navbar .logo img').addClass(_class);
    $('.navbar .menu li a').addClass(_class);
    $('.scroll-up-btn').addClass(_class);
  }

  function removeEffect(_class) {
    $('.navbar.sticky').removeClass(_class);
    $('.navbar .logo img').removeClass(_class);
    $('.navbar .menu li a').removeClass(_class);
    $('.scroll-up-btn').removeClass(_class);
  }


  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass("show");
    } else {
      $('.scroll-up-btn').removeClass("show");
    }

    // if (this.scrollY > $('#updates').offset().top - 100) {
    //   addEffect("night")
    // } else {
    //   removeEffect("night")
    // }

    // if (this.scrollY > $('.contact').offset().top - 100) {
    //   addEffect("deep")

    // } else {
    //   removeEffect("deep")
    // }
  });

  // slide-up script
  $('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
  });

  $('.navbar .menu li a').click(function () {
    // applying again smooth scroll on menu items click
    $('html').css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });


  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ gallery start ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  var gallery = document.querySelector('#gallery');
  var getVal = function (elem, style) { return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); };
  var getHeight = function (item) { return item.querySelector('.content').getBoundingClientRect().height; };
  var resizeAll = function () {
    var altura = getVal(gallery, 'grid-auto-rows');
    var gap = getVal(gallery, 'grid-row-gap');
    gallery.querySelectorAll('.gallery-item').forEach(function (item) {
      var el = item;
      el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
    });
  };
  gallery.querySelectorAll('img').forEach(function (item) {
    item.classList.add('byebye');

    // for url images
    if (item.complete) {
      console.log(item.src);
    }
    else {
      item.addEventListener('load', function () {
        var altura = getVal(gallery, 'grid-auto-rows');
        var gap = getVal(gallery, 'grid-row-gap');
        var gitem = item.parentElement.parentElement;
        gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
        item.classList.remove('byebye');
      });
    }
  
    // for local images
    var altura = getVal(gallery, 'grid-auto-rows');
    var gap = getVal(gallery, 'grid-row-gap');
    var gitem = item.parentElement.parentElement;
    gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
    item.classList.remove('byebye');
  });
  window.addEventListener('resize', resizeAll);
  gallery.querySelectorAll('.gallery-item').forEach(function (item) {
    // item.addEventListener('click', function () {
    //   item.classList.toggle('full');
    // });
  });

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ gallery end ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ lightbox start ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	$(function(){
		$('[data-rel="lightbox"]').lightbox();
	});


  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ lightbox end ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
});