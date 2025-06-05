const pageLoad = () => {
    const menuContainer = document.createElement("div");
    document.body.append(menuContainer);

    const header = document.createElement("h1");
    header.textContent = "Menu";
    menuContainer.append(header);

    const list = document.createElement("ul");
    document.menuContainer.append("list");

    const listItem1 = document.createElement("li");
    listItem1.textContent = "Coffee - $1.99";
    document.list.append(listItem1);

    const listItem2 = document.createElement("li");
    listItem2.textContent = "Bread - $2.99";
    document.list.append(listItem2);
}