//import ui from "ui.js";
import game from "./game.js";
//import $ from "//code.jquery.com/jquery-1.11.0.min.js";

const tag = (tag) => document.querySelector(tag);
const el = (id) => document.getElementById(id);


function setUserName() {
    let myName = prompt("Please enter your name");
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        tag("h2").textContent = "Welcome, " + myName + "!";
        el("playerOne").textContent = myName;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    tag("h2").textContent = "Welcome, " + storedName + "!";
    el("playerOne").textContent = storedName;
}

el("changePlayer").onclick = function () {
    setUserName();

};

el("play").onclick = function () {
    game.init();
    //ui.init();
};