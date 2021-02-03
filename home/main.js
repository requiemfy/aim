$(document).ready(function () {
  // location.href = "#home"
  $(window).on('beforeunload', function() {
    $('body').hide();
    $(window).scrollTop(0);
  });


  $('.venobox').venobox({
    framewidth: '80%',
    // frameheight: '600px',
    bgcolor: '',
    overlayColor: 'rgba(6, 12, 34, 0.85)',
    closeBackground: '',
    closeColor: '#fff',
    // spinner: 'wave',
    share: ['facebook', 'twitter', 'download']
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

    if (this.scrollY > $('#updates').offset().top - 100) {
      addEffect("night")
    } else {
      removeEffect("night")
    }

    if (this.scrollY > $('.contact').offset().top - 100) {
      addEffect("deep")

    } else {
      removeEffect("deep")
    }
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

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: [
      "Creative Minds", 
      "Critical Thinkers", 
      "Legendary Creatures", 
      "We Are Electric", 
      "We don't die", 
      "We multiply"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  // var typed = new Typed(".typing-2", {
  //   strings: ["our mission", "OUR MISSION!!"],
  //   typeSpeed: 100,
  //   backSpeed: 100,
  //   loop: true
  // });

  // var typed = new Typed(".typing-3", {
  //   strings: ["our vision", "OUR VISION!!"],
  //   typeSpeed: 100,
  //   backSpeed: 100,
  //   loop: true
  // });

  // owl carousel script
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });
});