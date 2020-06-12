const ships = Object.create(null);

ships.newShip = function () {
    return {
        "name": "Destroyer",
        "health": 1
    };
};


export default Object.freeze(ships);