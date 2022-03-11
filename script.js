$(document).ready(function() {
  $(window).scroll(function() {
    if(this.scrollY > 20) {
      $('.navbar').addClass('sticky');
    } else {
      $('.navbar').removeClass('sticky');
    }
  });


  // typing animation script
  var typed = new Typed(".typing", {
    strings: ["Front-End Developer", "Programmer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  })

  var typed = new Typed(".typing-2", {
    strings: ["Front-End Developer", "Programmer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  })

  // toggle menu/navbar script
  $('.menu-btn').click(function() {
    $('.navbar .menu').toggleClass("active")
    $('.menu-btn i').toggleClass("active")
  })
})