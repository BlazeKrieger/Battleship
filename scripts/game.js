const game = Object.create(null);

import ships from "./ships.js";

const el = (id) => document.getElementById(id);

const tag = (tag) => document.querySelector(tag);

const storedName = localStorage.getItem("name");

game.init = function () {
    let score = 1;
    localStorage.setItem("score", score);
    //let HP = 1;
    //localStorage.setItem("health", HP);
    alert("Now click around below!");

    function hit () {
        event.stopPropagation();
        tag("audio").play();
        alert("ouch!");
        //const health = localStorage.getItem("health");
        //HP -= 1;
        //localStorage.setItem("health", HP);
        
        //if (health === 0) {
            //el("ship1").remove();
        //}
        const number = localStorage.getItem("score");
        score += 1;
        localStorage.setItem("score", score);
        console.log(HP);
        return el("score").textContent = "Score : " + number;
    }

    el("seaOne").onclick = () => alert(storedName + "s territory!");
    el("seaTwo").onclick = () => alert("Player 2's territory!");
    el("ship1").onclick = () => hit();
    el("ship2").onclick = () => hit();
    el("ship3").onclick = () => hit();

    function health () {
        let HP = ships.Newship.getItem("health");
        HP -= 1;
        ships.Newship.setItem("health", HP);
        if (HP === 0) {
            el("ship1").remove();
        }
    }

    el("ship1").addEventListener("click", health);
};


export default Object.freeze(game);