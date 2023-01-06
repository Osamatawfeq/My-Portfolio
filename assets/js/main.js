/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((link) => link.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content");
const skillsHeader = document.querySelectorAll(".skills__header");
function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  } else {
    this.parentNode.className = "skills__content skills__close";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal");
const modalBtns = document.querySelectorAll(".services__button");
const modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  loop: true,
  grapCursor: true,
  spaceBetween: 48,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll(".section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 85;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

/*==================== CHANGE HEADER BACKGROUND ====================*/
const scrollHeader = () => {
  const nav = document.getElementById("header");
  // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark-theme
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / Deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*==================== SCROLL REVEAL ANIMATION ====================*/
// Common reveal options to create reveal animation
// ScrollReveal({
//   reset: true,
//   distance: "60px",
//   duration: 2500,
//   delay: 100,
// });

// // Target elements, and specify options to create reveal animations .skills .section__title, .skills .section__subtitle, .services .section__title, .services .section__subtitle, .testimonial .section__title, .testimonial .section__subtitle,
// // LEFT DIRECTION //
// ScrollReveal().reveal(
//   ".home .home__data h1, .section__title, .section__subtitle, .about__img, .project__title, .project__description, .project__button, .home__data h3, .home__data p, .about__data .about__buttons",
//   { delay: 500, origin: "left" }
// );
// ScrollReveal().reveal(
//   ".home .home__social .home__social-icon, .contact__information, .qualification__tabs div, .project__img",
//   {
//     delay: 600,
//     origin: "left",
//     interval: 200,
//   }
// );
// // BUTTOM DIRECTION //
// ScrollReveal().reveal(
//   ".home__data .home__button, .home__scroll, .qualification__active .qualification__rounder, .qualification__active .qualification__line, .skills__content, .swiper-wrapper, .swiper-container-horizontal, .about__description, .swiper-button-next, .swiper-button-prev, .home__img, .contact__button",
//   {
//     delay: 600,
//     origin: "bottom",
//   }
// );
// ScrollReveal().reveal(".about__info div, .contact__content", {
//   delay: 600,
//   origin: "bottom",
//   interval: 200,
// });
// // TOP DIRECTION //
// ScrollReveal().reveal(
//   ".services__cards, .qualification__active .qualification__data .qualification__title, .qualification__active .qualification__data .qualification__subtitle, .qualification__active .qualification__data .qualification__calendar",
//   {
//     delay: 600,
//     origin: "top",
//     interval: 200,
//   }
// );

/*==================== CONTACT FROM HANDLER ====================*/
// function sendEmail() {
//   const contactName = document.getElementById("name").value;
//   const contactEmail = document.getElementById("email").value;
//   const contactSubject = document.getElementById("subject").value;
//   const contactMessage = document.getElementById("message").value;
//   const contactbody =
//     "Name: " +
//     contactName +
//     "<br/> Email: " +
//     contactEmail +
//     "<br/> Subject: " +
//     contactSubject +
//     "<br/> Message: " +
//     contactMessage;

//   Email.send({
//     Host: "smtp.gmail.com",
//     Username: "osama.almangathi@gmail.com",
//     Password: "(123..osama.jukako..890)",
//     To: "osama.almangathi@gmail.com",
//     From: contactEmail,
//     Subject: contactSubject,
//     Body: contactbody,
//   }).then((message) =>
//     alert(
//       "Your Message was sent successfully. \nThank you for contacing me. \nI will reply to you as soon as possible."
//     )
//   );
// }
