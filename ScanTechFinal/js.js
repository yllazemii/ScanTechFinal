function updateClockStatus() {
  const now = new Date();
  const hour = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  const clock = document.getElementById("clock");
  const timeString = `${hour}:${minutes}:${seconds}`;

  // Determine if office is open (8 AM – 11 PM)
  const isOpen = hour >= 8 && hour < 23;

  // Display time and status with color
  clock.innerHTML = `
    <span style="font-weight:600;">${timeString}</span>
    <span style="color:${isOpen ? 'limegreen' : 'red'}; font-weight:bold; margin-left:8px;">
      ${isOpen ? 'Open' : 'Closed'}
    </span>
  `;
}

// Initial call and update every second
updateClockStatus();
setInterval(updateClockStatus, 1000);

let slideIndex = 0;
showSlides();

// Automatically show slides
function showSlides() {
  let slides = document.getElementsByClassName("carousel-slide");
  let dots = document.getElementsByClassName("dot");
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  
  setTimeout(showSlides, 4000); // change slide every 4 seconds
}

// Manual navigation with arrows
function changeSlide(n) {
  slideIndex += n - 1; // because showSlides auto increments
  showSlides();
}

// Click on dot to jump to slide
function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}
