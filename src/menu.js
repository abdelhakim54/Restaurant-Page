import "./css/common.css";
import "./css/menu.css";

import california from "./img/california.jpg";
import chicago from "./img/chicago.jpg";
import napolitaleon from "./img/napolitaleon.jpg";
import sicilian from "./img/sicilian.jpg";

const imgs = [california, sicilian, napolitaleon, chicago];
const menuMeals = ["californian", "sicilian", "napolitaleon", "chicago"];


function addRecipes(){
    const centeredDiv = document.createElement("div");
    centeredDiv.classList.add("centered");

    for(let i = 0; i < 4; i++){
        const div = document.createElement("div");
        div.classList.add("item");

        const img = new Image();
        img.src = imgs[i];

        const p = document.createElement("p");
        p.textContent = menuMeals[i] + " pizza";

        div.appendChild(img);
        div.appendChild(p);

        centeredDiv.appendChild(div);
    }

    return centeredDiv;
}

function mainContent(){
    const content = document.createElement("div");
    content.classList.add("content");

    content.appendChild(addRecipes());

    return content;
}


function loadMenu(){
    const mainDiv = document.querySelector(".background-img");

    mainDiv.textContent = "";
    mainDiv.appendChild(mainContent());
}

export default loadMenu;