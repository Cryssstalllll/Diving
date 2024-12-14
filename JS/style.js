// $(".custom-carousel").owlCarousel({
//     autoWidth: true,
//     loop: true
//   });
//   $(document).ready(function () {
//     $(".custom-carousel .item").click(function () {
//       $(".custom-carousel .item").not($(this)).removeClass("active");
//       $(this).toggleClass("active");
//     });
//   });
  

  // codepen輪播
  const carousel = document.querySelector('.carousel');
  const cards = document.querySelectorAll('.carousel-card');
  
  let currentIndex = 0;
  const cardWidth = cards[0].offsetWidth + 10; // 卡片寬度 + 間距
  
  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }
  
  function nextSlide() {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
  }
  
  setInterval(nextSlide, 2000); // 每 2 秒切換
  
  




  
  