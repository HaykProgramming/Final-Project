var LiveForm = require("./LiveForm");
var random = require("./random");


module.exports = class Vagr extends LiveForm {
    constructor(x, y) {
        super(x, y);
        this.kyanq = 56;
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
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);

        if (newCell) {
            vagrHashiv++
            let x = newCell[0];
            let y = newCell[1];


            matrix[y][x] = 3;


            let vagr = new Vagr(x, y);
            vagrArr.push(vagr);

            this.kyanq = 0;
        }
    }
    utel() {
        let emptyCells = this.chooseCell(2);
        let newCell = random(emptyCells);

        if (newCell) {
            this.life++;

            let x = newCell[0];
            let y = newCell[1];


            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;


            for (let i in grassEaterArr) {
                if (grassEaterArr[i].x == x && grassEaterArr[i].y == y) {
                    grassEaterArr.splice(i, 1)
                }
            }

            this.y = y;
            this.x = x;

            if (this.kyanq >= 58) {
                this.mul();
            }
        } else {
            this.move()
        }
    }
    move() {
        this.kyanq--;
        let emptyCells = this.chooseCell(0);
        let emptyCells1 = this.chooseCell(1);
        let newCell = random(emptyCells.concat(emptyCells1));

        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];


            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            this.y = y;
            this.x = x;
        }
        if (this.kyanq < 0) {
            this.die();
        }
    }
    die() {
        matrix[this.y][this.x] = 0;

        for (let i in vagrArr) {
            if (vagrArr[i].x == this.x && vagrArr[i].y == this.y) {
                vagrArr.splice(i, 1)
            }
        }
    }
}