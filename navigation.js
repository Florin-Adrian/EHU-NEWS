const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const logoText = document.querySelector('.logo h3');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  logoText.classList.toggle('hidden');
});

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
  slides.forEach((slide) => slide.classList.remove("active"));

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  slides[slideIndex - 1].classList.add("active");

  setTimeout(showSlides, 5000); // 5 seconds per slide
}

// Start the slideshow
showSlides();

// Manual nav buttons (optional)
function plusSlides(n) {
  slideIndex += n - 1;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  if (slideIndex >= slides.length) slideIndex = 0;

  slides.forEach((slide) => slide.classList.remove("active"));
  slides[slideIndex].classList.add("active");
}

function openModal(id) {
    document.getElementById(`modal-${id}`).classList.add("active");
  }
  
  function closeModal(id) {
    document.getElementById(`modal-${id}`).classList.remove("active");
  }
  
// Close modal when clicking outside the modal-content
document.addEventListener('click', function (event) {
    document.querySelectorAll('.news-modal.active').forEach(modal => {
      if (!event.target.closest('.modal-content') && !event.target.closest('.news-card')) {
        modal.classList.remove('active');
      }
    });
  });  