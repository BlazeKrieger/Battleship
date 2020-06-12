//import game from "game.js";

const ui = Object.create(null);

const tag = (tag) => document.querySelector(tag);
const el = (id) => document.getElementById(id);

/*ui.init = function () {
    function dragstart_handler(event) {
        event.dataTransfer.setData("application/x-moz-node", event.target.id);
    }
    el.addEventListener("dragstart", dragstart_handler);
};*/

export default Object.freeze(ui);