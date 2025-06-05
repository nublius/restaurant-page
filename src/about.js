const contentContainer = document.getElementById("content");

export const pageLoad = () => {
    const infoHeader = document.createElement("h1");
    infoHeader.textContent = "About the Restaurant";
    contentContainer.append(infoHeader);

    const info = document.createElement("p");
    info.textContent = "Wowowowowowowow great restaurant made by great cook and programmer";
    contentContainer.append(info);
}