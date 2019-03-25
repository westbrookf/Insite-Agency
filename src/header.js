//Open Main nav Menu
let opnBtn = document.querySelector(".opnBars");

opnBtn.addEventListener("click", opnNav);

function opnNav() {
  const navMenu = document.querySelector(".mainNav");
  navMenu.style.transform = "scale(1)";
  navMenu.style.opacity = "1";
}

//Close Main nav Menu
let clseBtn = document.querySelector(".closeBtn");

clseBtn.addEventListener("click", closeNav);

function closeNav() {
  const navMenu = document.querySelector(".mainNav");
  navMenu.style.opacity = "0";
  navMenu.style.transform = "scale(0)";
}

// On scroll menu open button background color change

window.onscroll = function() {
  shwBack();
};

let topBtn = document.getElementById("toTopBtn");

function shwBack() {
  if (document.body.scrollTop > 6 || document.documentElement.scrollTop > 6) {
    opnBtn.style.backgroundColor = "#38b6ff";
    topBtn.style.display = "block";
  } else {
    opnBtn.style.backgroundColor = "";
    topBtn.style.display = "none";
  }
}
topBtn.addEventListener("click", toTop);

function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
