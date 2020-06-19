
const des = window.describe;
const it = window.it;
const fc = window.fastcheck;
const chai = window.chai;

//This function generates a random number between min and max values
//Used to randomise the coordinates of the bot's ships
const plot = (min, max) => Math.random() * (max - min) + min;

//Example based unit test of same plot() function
des("Example-based test", function () {
    it("pass", function () {
        const min = 15;
        const max = 55;
        plot(min, max);
        if (plot(min, max) >= max || plot(min, max) <= min) {
            throw "didn't pass test";
        }

        //chai.expect(calc).to.deep.equal(result);
    });
});

//Function is split in half to test by superposition
des("Random generator of numbers superior or equal to 0", function () {
    it("Results successfully belong to given domain", function () {
        fc.assert(
            fc.property(
                fc.nat(),
                function (min) {
                    return plot(min, 0) >= 0;
                }
            ),
            {"verbose": true}
        );
    });
});

des("Random generator of numbers inferior or equal to max input", function () {
    it("Results successfully belong to given domain", function () {
        fc.assert(
            fc.property(
                fc.nat(),
                function (max) {
                    return plot(0, max) <= max;
                }
            ),
            {"verbose": true}
        );
    });
});