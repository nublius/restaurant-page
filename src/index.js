import "./styles.css";

import { pageLoad as homePageLoad } from "./homepage.js";
import { pageLoad as menuPageLoad } from "./menu.js";
import { pageLoad as aboutPageLoad } from "./about.js";

homePageLoad();

const contentContainer = document.getElementById("content");

const homeButton = document.getElementById("home");
homeButton.addEventListener('click', () =>{
    contentContainer.innerHTML = '';
    homePageLoad();
});

const menuButton = document.getElementById("menu");
menuButton.addEventListener('click', () =>{
    contentContainer.innerHTML = '';
    menuPageLoad();
});

const aboutButton = document.getElementById("about");
aboutButton.addEventListener('click', () => {
    contentContainer.innerHTML = '';
    aboutPageLoad();
})

console.log("Hello, World!");