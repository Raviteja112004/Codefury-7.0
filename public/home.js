document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  let n = slides.length;
  let counter = 0;

  slides.forEach((slide, index) => {
      slide.style.left = `${index * 100}%`;
  });

  const slideimg = () => {
      slides.forEach((slide) => {
          slide.style.transform = `translateX(-${counter * 100}%)`; // Fixed this line
          slide.style.transition = '1.5s';
      });
  };

  const nextSlide = () => {
      counter = (counter + 1) % n;
      slideimg();
  };

  const prevSlide = () => {
      if (counter != 0) {
          counter--;
      }
      slideimg();
  };

  document.querySelector('.next').addEventListener('click', nextSlide);
  document.querySelector('.prev').addEventListener('click', prevSlide);

  // Auto-scrolling
  let setId = setInterval(() => {
      nextSlide();
  }, 3000);

  slides.forEach((slide) => {
      slide.addEventListener('mouseover', () => {
          clearTimeout(setId);
      });
  });

  slides.forEach((slide) => {
      slide.addEventListener('mouseout', () => {
          setId = setInterval(() => {
              nextSlide();
          }, 3000);
      });
  });

  const sos = document.querySelector('.pushable').addEventListener('click',()=>{
    const ph = '9711077372';
    window.location.href = `tel:${ph}`;
  })
  
});
