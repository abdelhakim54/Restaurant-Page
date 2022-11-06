import "./css/common.css";



function mainContent(){
    const content = document.querySelector(".background-img");

    return content;
}

function loadContact(){
    const mainDiv = document.querySelector(".background-img");

    mainDiv.textContent = "";
    mainDiv.appendChild(mainContent());
}

export default loadContact;