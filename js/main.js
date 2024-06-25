anime.timeline({ loop: false })
  .add({
    targets: '.section-1 .display-4',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 500,
    delay: 1300
  }).add({
    targets: '.section-1 .h4',
    opacity: [0,1],
    translateX: [40,0],
    easing: "easeOutExpo",
    duration: 1000,
    delay: 100
  });

  
  anime({
    targets: '.logo',
    opacity: [0, 1],
    translateY: [20, 0],
    easing: "easeInOutQuad",
    duration: 1000,
    delay: 1100
  });

  anime({
    targets: '.line-wrapper',
    opacity: [0, 1],
    translateY: [20, 0],
    easing: "easeInOutQuad",
    duration: 1000,
    delay: 1000
  });
  
  anime({
    targets: '.phone',
    opacity: [0, 1],
    translateY: [20, 0],
    easing: "easeInOutQuad",
    duration: 1000,
    delay: 1100
  });

  anime({
    targets: '#background-video',
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 1300,
    delay: 200
  });

  document.addEventListener('DOMContentLoaded', function() {
    var aboutUsImage = document.querySelector('.about-img');
  
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          anime({
            targets: '.about-img',
            opacity: [0, 1],
            translateY: [50, 0],
            easing: 'easeInOutQuad',
            duration: 1000,
            complete: function(anim) {
              aboutUsImage.classList.remove('hidden');
            }
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(aboutUsImage);
  });


// LOADER
document.addEventListener("DOMContentLoaded", function() {
    var loaderWrapper = document.querySelector('.loader-wrapper');
    setTimeout(function() {
      loaderWrapper.classList.add('hidden');
    }, 300);

    document.addEventListener('scroll', function() {
      const header = document.querySelector('.header');
      const section2 = document.querySelector('.text-block');
      const section2Top = section2.getBoundingClientRect().top;
      
      if (section2Top <= header.offsetHeight) {
          header.classList.add('scrolled');
      } else {
          header.classList.remove('scrolled');
      }
  });
});