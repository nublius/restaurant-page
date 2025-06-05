import restaurantPic from "./images/restaurant.jpg";

export const pageLoad = () => {
    const coverImg = document.createElement("img");
    coverImg.src = restaurantPic;

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img__container");
    document.body.append(imgContainer);

    const headline = document.createElement("h1");
    headline.textContent = "Very Restaurant, Wow";
    document.body.append(headline);

    const paragraph = document.createElement("p");
    paragraph.textContent = "Lorem ipsum blablabla restaurant Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum architecto laborum, error adipisci quos fugit animi soluta beatae, maxime corporis ducimus quo consectetur doloribus nulla totam perspiciatis placeat dolorem nobis."
    document.body.append(paragraph);

    imgContainer.append(coverImg);
};
