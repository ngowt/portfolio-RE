const carousel = document.querySelector(".carousel");
const cells = carousel.querySelectorAll(".carousel__cell");
const cellWidth = carousel.offsetWidth;
const cellHeight = carousel.offsetHeight;
const theta = 360 / cells.length;
const radius = Math.round(cellWidth / 2 / Math.tan(Math.PI / cells.length));
let selectedIndex = 0;

const rotateCarousel = () => {
  var angle = theta * selectedIndex * -1;
  carousel.style.transform = `translateZ(-${radius}px) rotateY(${angle}deg)`;
};

const prevButton = document
  .querySelector(".carousel-controls__btn-prev")
  .addEventListener("click", () => {
    selectedIndex--;
    rotateCarousel();
  });

const nextButton = document
  .querySelector(".carousel-controls__btn-next")
  .addEventListener("click", () => {
    selectedIndex++;
    rotateCarousel();
  });

const changeCarousel = () => {
  for (var i = 0; i < cells.length; i++) {
    const cell = cells[i];
    if (i < cells.length) {
      // visible cell
      const cellAngle = theta * i;
      cell.style.transform = `rotateY(${cellAngle}deg) translateZ(${radius}px)`;
    }
  }
  rotateCarousel();
};

// set initials
changeCarousel();
