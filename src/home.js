import "./css/common.css";
import "./css/style.css";

import myImage from "./img/chef.jpg";



function mainContent(){
    const content = document.createElement("div");
    content.classList.add("main-content");
    
    const centeredDiv = document.createElement("div");
    centeredDiv.classList.add("centered-div");

    const p = document.createElement("p");
    p.textContent = "Best food you will ever EAT";

    const img = new Image();
    img.src = myImage;
    
    const anotherP = document.createElement("p");
    anotherP.textContent = "Order Online Now or Visit us";

    centeredDiv.append(p);
    centeredDiv.append(img);
    centeredDiv.append(anotherP);

    content.appendChild(centeredDiv);

    return content;
}

function loadHome(){
    const mainDiv = document.querySelector(".background-img");

    mainDiv.textContent = "";
    mainDiv.appendChild(mainContent());
}

export default loadHome;