document.addEventListener("DOMContentLoaded", () => {
  const textSlide = document.querySelectorAll(".hero-text-slide");

  textSlide.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * i}%)`;
    //   slide.style.color = "blue";
  });
  const maxSlide = textSlide.length;
  let currSlide = 0;
  setInterval(() => {
    currSlide === maxSlide - 1 ? (currSlide = 0) : currSlide++;
    textSlide.forEach((slide, i) => {
      slide.style.transform = `translateX(${100 * (i - currSlide)}%)`;
      //   slide.style.color = "blue";
    });
  }, 5000);

  // slider

  const slide = document.querySelectorAll(".slide");
  slide.forEach(function (s, i) {
    s.style.transform = `translateX(${100 * i}%)`;
  });

  setInterval(() => {
    currSlide === maxSlide - 1 ? (currSlide = 0) : currSlide++;
    goToSlide(currSlide);
    activeDot(currSlide);
  }, 5000);

  const dots = document.querySelector(".dots");
  slide.forEach((_, i) => {
    dots.insertAdjacentHTML(
      "beforeend",
      ` <button class="dots__dot" data-active="${i}"></button>`
    );
  });

  const activeDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));
    document
      .querySelector(`.dots__dot[data-active="${slide}"]`)
      .classList.add("dots__dot--active");
  };
  activeDot(0);
  let currSlider = 0;
  const goToSlide = function (currSlide) {
    slide.forEach((slide, i) => {
      slide.style.transform = `translateX(${100 * (i - currSlide)}%)`;
      //   slide.style.color = "blue";
    });
  };
  dots.addEventListener("click", function (e) {
    e.preventDefault();
    const dot = e.target;
    if (dot.classList.contains("dots__dot")) {
      const index = dot.dataset.active;
      currSlider = index;
      console.log(index);
      goToSlide(index);
      activeDot(index);
    }
  });

  // IMG SLIDER
  const sliderImg = document.querySelectorAll(".slider-img");
  const imgLeft = document.querySelector(".img-left");
  const imgRight = document.querySelector(".img-right");

  let imgCurrSlide = 0;
  sliderImg.forEach(function (s, i) {
    s.style.transform = `translateX(${
      100 * (i - imgCurrSlide)
    }%) translateY(-50%)`;
  });
  const maxImg = sliderImg.length;
  imgRight.addEventListener("click", function (e) {
    e.preventDefault();
    imgCurrSlide === maxImg - 1 ? (imgCurrSlide = 0) : imgCurrSlide++;
    sliderImg.forEach(function (s, i) {
      s.style.transform = `translateX(${
        100 * (i - imgCurrSlide)
      }%) translateY(-50%)`;
    });
  });

  imgLeft.addEventListener("click", function (e) {
    e.preventDefault();
    imgCurrSlide === 0 ? (imgCurrSlide = maxImg - 1) : imgCurrSlide--;
    sliderImg.forEach(function (s, i) {
      s.style.transform = `translateX(${
        100 * (i - imgCurrSlide)
      }%) translateY(-50%)`;
    });
  });

  // SHOWING THE IMG SLIDER
  const blogImgs = document.querySelectorAll(".blog-img");
  const sliderContainer = document.querySelector(".blog-slider");
  const bgCloser = document.querySelector(".bg-closer");
  const blogGrid = document.querySelector(".blog-grid-02");

  // blogImgs.forEach((img) => {
  //   img.addEventListener("click", function () {
  //     const n = img.target.dataset.src;
  //     console.log(n);
  //   });
  // });

  blogGrid.addEventListener("click", function (e) {
    const clicked = e.target;
    if (!clicked) return;
    if (clicked.classList.contains("blog-img")) {
      sliderContainer.classList.remove("slider-hidden");
      const index = clicked.dataset.src;
      console.log(index);
      sliderImg.forEach(function (s, i) {
        s.style.transform = `translateX(${
          100 * (i - index - 1)
        }%) translateY(-50%)`;
      });
    }
  });
  bgCloser.addEventListener("click", function () {
    sliderContainer.classList.add("slider-hidden");
  });
  const btnCloseSlider = document.querySelector(".btn-close-slider");
  btnCloseSlider.addEventListener("click", function () {
    sliderContainer.classList.add("slider-hidden");
  });
  document.addEventListener("keydown", function (e) {
    console.log(e);
    if (e.key === "Escape") {
      sliderContainer.classList.add("slider-hidden");
    }
    if (e.key === "Backspace") {
      sliderContainer.classList.add("slider-hidden");
    }
  });
  // SMOOTH SCROLLING
  const navList = document.querySelector(".nav-list");
  navList.addEventListener("click", function (e) {
    e.preventDefault();
    const link = e.target.closest(".nav-link");
    if (!link) return;
    const id = link.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });

  // REVEAL ALL LEFT ELEMENT

  const elementsLeft = document.querySelectorAll(".element-left");
  elementsLeft.forEach((left) => {
    left.classList.add("elements-reveal-left");
  });
  const leftCall = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("elements-reveal-left");
    observer.unobserve(entry.target);
  };

  const leftObserver = new IntersectionObserver(leftCall, {
    root: null,
    threshold: 0.15,
  });

  elementsLeft.forEach((left) => {
    leftObserver.observe(left);
  });

  // REVEAL ALL RIGHT ELEMENT

  const elementsRight = document.querySelectorAll(".element-right");
  elementsRight.forEach((right) => {
    right.classList.add("elements-reveal-right");
  });
  const rightCall = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("elements-reveal-right");
    observer.unobserve(entry.target);
  };

  const rightObserver = new IntersectionObserver(rightCall, {
    root: null,
    threshold: 0.15,
  });

  elementsRight.forEach((right) => {
    rightObserver.observe(right);
  });

  // REVEAL ALL CENTER ELEMENT

  const elementsCenter = document.querySelectorAll(".element-center");
  elementsCenter.forEach((center) => {
    center.classList.add("elements-reveal-center");
  });
  const centerCall = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("elements-reveal-center");
    observer.unobserve(entry.target);
  };

  const centerObserver = new IntersectionObserver(centerCall, {
    root: null,
    threshold: 0.2,
  });

  elementsCenter.forEach((center) => {
    centerObserver.observe(center);
  });

  // REVEAL ALL SECTION

  const allSection = document.querySelectorAll(".section");
  allSection.forEach((section) => {
    section.classList.add("section-reveal");
  });
  const sectionCall = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section-reveal");
    observer.unobserve(entry.target);
  };

  const sectionObserver = new IntersectionObserver(sectionCall, {
    root: null,
    threshold: 0.1,
  });

  allSection.forEach((section) => {
    sectionObserver.observe(section);
  });
});
//Lazy LOAD IMAGES
// const allImages = document.querySelectorAll(".blog-img");
// allImages.forEach((img) => {
//   img.classList.add("lazy-img");
// });
// const imgCall = function (entries, observer) {
//   const [entry] = entries;
//   if (!entry.target) return;
//   entry.target.classList.remove("lazy-img");
//   observer.unobserve(entry.target);
// };
// const imageObesver = new IntersectionObserver(imgCall, {
//   root: null,
//   threshold: 0,
// });
// allImages.forEach((img) => {
//   imageObesver.observe(img);
// });

//SUMMARY COUNTER

// const allSumNum = document.querySelectorAll(".sum-num");

// const [user, arts, creator] = allSumNum;
// console.log(user.textContent, arts, creator);

// let userNum = Number(user.textContent);
// let artsNum = Number(arts.textContent);
// let creatorNum = Number(creator.textContent);

// const actUser = function () {
//   for (let i = 0; i < userNum; i++) {
//     setTimeout(actUser, 1000);
//     console.log(user.textContent);
//   }
// };
// actUser();
// const numeroAtualSeguidores = 1000; // Altere este valor para o número atual de seguidores
// const contadorElemento = document.getElementById("seguidores");
// let contador = 0;

// function atualizarContador() {
//   if (contador < numeroAtualSeguidores) {
//     contador++;
//     contadorElemento.innerText = contador;
//     setTimeout(atualizarContador, 10); // Define um intervalo de 10 milissegundos para atualizar gradualmente
//   }
// }

// window.onload = function () {
//   atualizarContador();
// };

//LOADER

const loader = document.querySelector(".loader");

setTimeout(function () {
  loader.classList.add("opacity-loader");
}, 3000);
setTimeout(function () {
  loader.classList.add("hide-loader");
}, 3500);
