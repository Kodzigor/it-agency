document.addEventListener('DOMContentLoaded', () => {
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
