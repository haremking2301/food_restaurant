"use strict"
let navbar_btn = document.querySelector(".menu");
let navbar = document.querySelector(".navbar");

navbar_btn.addEventListener("click", function(e) {
    navbar.classList.toggle("open")
    navbar_btn.classList.toggle("open");
})