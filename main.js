document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');

  window.onscroll = () => {
    if (window.pageYOffset > 200) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  };

  // Smooth scrolling for anchor links
  //

  header.addEventListener('click', event => {
    if (event.target.classList.contains('menu-link')) {
      event.preventDefault();

      const targetId = event.target.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;

      let startTime = null;

      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, 600);
        window.scrollTo(0, run);
        if (timeElapsed < 600) requestAnimationFrame(animation);
      }

      function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      }

      requestAnimationFrame(animation);
    }
  });

  // Highlight active menu item on scroll
  //

  const sections = document.querySelectorAll('section');
  const menuLinks = document.querySelectorAll('.menu-link');

  const activateMenuItem = () => {
    for (const section of sections) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSection = section;
      } else {
        break;
      }
    }

    menuLinks.forEach(link => {
      link.classList.toggle('active', link.hash === `#${currentSection.id}`);
    });
  };

  window.addEventListener('scroll', activateMenuItem);

  const swiper = new Swiper('.swiper', {
    slidesPerView: 2,
    spaceBetween: 20,
    pagination: {
      el: '.reviews-dots',
      bulletActiveClass: 'reviews-dot-active',
      bulletClass: 'reviews-dot',
      clickable: true,
    },

    navigation: {
      nextEl: '.review-button-next',
      prevEl: '.review-button-prev',
      enabled: true,
    },
  });
});
