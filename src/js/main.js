import "../scss/main.scss";

const menu = document.getElementById("mainMenu");
const menuButton = document.getElementById("menuButton");

const dropdownButton = document.getElementById("dropdownButton");
const dropdownMenu = document.getElementById("dropdownMenu");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

dropdownButton.addEventListener("click", () => {
  dropdownMenu.classList.toggle("hidden");
});

// const video = document.querySelectorAll("video");

// video.forEach((play) =>
//   play.addEventListener("click", () => {
//     play.classList.toggle("active");

//     if (play.paused) {
//       play.play();
//     } else {
//       play.pause();
//       play.currentTime = 0;
//     }
//   })
// );

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
