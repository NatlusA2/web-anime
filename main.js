let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}






document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".wrapper");
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");
  
    function showSlide(index) {
      if (index < 0) {
        slideIndex = slides.length - 1;
      } else if (index >= slides.length) {
        slideIndex = 0;
      }
      const slideWidth = -slideIndex * 33.33;
      wrapper.style.transform = `translateX(${slideWidth}%)`;
    }
  
    function showNextSlide() {
      slideIndex++;
      showSlide(slideIndex);
    }
  
    setInterval(showNextSlide, 3000); // Ubah slide setiap 3 detik
  
    showSlide(slideIndex);
  });
  
  var swiper = new Swiper(".anime-slider", {
    slidesPerView: 4,
    spaceBetween: 100,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });

