var LiveForm = require("./LiveForm");
var random = require("./random");


module.exports = class Rain extends LiveForm {
    constructor(x, y) {
        super(x, y)
        this.mp = 0;
        this.directions = [];
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
    mul() {
        this.mp++;
        let emptyCellss = this.chooseCell(0)
        let emptyCells = this.chooseCell(1);
        let newCell = random(emptyCellss.concat(emptyCells));

        if (newCell && this.mp >= 10) {
            rainHashiv++
            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 4;

            let rain = new Rain(x, y);
            rainArr.push(rain);


            this.mp = 0;

        }
    }
}