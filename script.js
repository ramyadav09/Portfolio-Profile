let hamburger = document.querySelector(".hamburger");
let cross = document.querySelector(".cross");
let menu_list = document.querySelector(".menu-list");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("-translate-x-96");
  cross.classList.remove("-translate-y-96");
  cross.classList.add("-translate-y-12");
  menu_list.classList.toggle("-translate-x-full");
  // console.log("i am clicked");
});

cross.addEventListener("click", () => {
  hamburger.classList.toggle("-translate-x-96");
  cross.classList.remove("-translate-y-12");
  cross.classList.add("-translate-y-96");
  menu_list.classList.toggle("-translate-x-full");
  // console.log("i am clicked");
});

//lists effects

let home = document.querySelector(".home");
let about = document.querySelector(".about");
let skills = document.querySelector(".skills");
let portfolio = document.querySelector(".portfolio");
let contact = document.querySelector(".contact");
let lists = document.querySelectorAll(".lists");
lists.forEach((Event1) => {
  Event1.addEventListener("click", () => {
    hamburger.classList.toggle("-translate-x-96");
    cross.classList.remove("-translate-y-12");
    cross.classList.add("-translate-y-96");
    menu_list.classList.toggle("-translate-x-full");
    lists.forEach((el) => {
      el.classList.remove("text-purple-300");
    });
    Event1.classList.add("text-purple-300");
    console.log("i am clicked");
  });
});
function homefun() {
  lists.forEach((el) => {
    el.classList.remove("text-purple-300");
  });
  home.classList.add("text-purple-300");
}
function aboutfun() {
  lists.forEach((el) => {
    el.classList.remove("text-purple-300");
  });
  about.classList.add("text-purple-300");
}
function skillsfun() {
  lists.forEach((el) => {
    el.classList.remove("text-purple-300");
  });
  skills.classList.add("text-purple-300");
}
function portfoliofun() {
  lists.forEach((el) => {
    el.classList.remove("text-purple-300");
  });
  portfolio.classList.add("text-purple-300");
}
function contactfun() {
  lists.forEach((el) => {
    el.classList.remove("text-purple-300");
  });
  contact.classList.add("text-purple-300");
}

var typed = new Typed(".web-dev", {
  strings: [
    "Web Designer",
    "CSE Student",
  ],
  typeSpeed: 75,
  backSpeed: 75,
  backDelay: 500,
  loop: true,
});
