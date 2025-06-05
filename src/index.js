import "./styles.css";

import restaurantPic from "./images/restaurant.jpg";

const coverImg = document.createElement("img");
coverImg.src = restaurantPic;

const imgContainer = document.querySelector(".img__container");
imgContainer.append(coverImg);

console.log("Hello, World!");