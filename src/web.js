import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";
import "./css/common.css";


function createHeader(){

    const header = document.createElement("header");

    const divTitle = document.createElement("div");
    divTitle.classList.add("title");
    divTitle.textContent = "Restaurant Of Milan";

    const nav = document.createElement("nav");
    const ul = document.createElement("ul");

    const homeButton = document.createElement("li");
    homeButton.textContent = "Home";
    homeButton.addEventListener("click", (e) => {
        if(e.target.classList.contains("active")) return;
        setActive(homeButton);
        loadHome();
    });

    const menuButton = document.createElement("li");
    menuButton.textContent = "Menu";
    menuButton.addEventListener("click", (e) => {
        if(e.target.classList.contains("active")) return;
        setActive(menuButton);
        loadMenu();
    });

    const contactButton = document.createElement("li");
    contactButton.textContent = "Contact";
    contactButton.addEventListener("click", (e) => {
        if(e.target.classList.contains("active")) return;
        setActive(contactButton);
        loadContact();
    })

    ul.appendChild(homeButton);
    ul.appendChild(menuButton);
    ul.appendChild(contactButton);
    
    nav.appendChild(ul);

    header.appendChild(divTitle);
    header.appendChild(nav);

    return header;
}

function setActive(button){
    const tabs = document.querySelectorAll("nav li");

    tabs.forEach((button) => {
        if( button !== this){
            button.classList.remove("active");
        }
    });
    button.classList.add("active");
}

function createMainDiv(){
    const main =  document.createElement("div");
    main.classList.add("background-img");
    return main;
}


function createContentDiv(){
    const content = document.createElement("div");
    content.setAttribute("id", "content");
    return content
}

function init(){
    document.querySelector("body").appendChild(createContentDiv());
    const contentDiv = document.querySelector("#content");

    contentDiv.appendChild(createHeader());
    contentDiv.appendChild(createMainDiv());

    setActive(document.querySelector("li"));

    loadHome();
}

export default init;