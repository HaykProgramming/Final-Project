var LiveForm = require("./LiveForm");
var random = require("./random");


module.exports = class Jurcrich extends LiveForm {
    constructor(x, y) {
        super(x,y)
        this.jizn = 92;
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
            jurcrichHashiv++
            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 5;

            let jurcrich = new Jurcrich(x, y);
            jurcrichArr.push(jurcrich);

            this.jizn = 0;
        }
    }
    kcel() {
        let emptyCells = this.chooseCell(4);
        let newCell = random(emptyCells);

        if (newCell) {
            this.jizn++;

            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;


            for (let i in rainArr) {
                if (rainArr[i].x == x && rainArr[i].y == y) {
                    rainArr.splice(i, 1)
                }
            }

            this.y = y;
            this.x = x;

            if (this.jizn >= 92) {
                this.mul();
            }
        } else {
            this.move()
        }
    }
    move() {
        this.jizn--;
        let emptyCells = this.chooseCell(0);
        let emptyCells3 = this.chooseCell(1);
        let newCell = random(emptyCells.concat(emptyCells3));

        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;

            this.y = y;
            this.x = x;
        }
        if (this.jizn < 0) {
            this.die();
        }
    }
    die() {
        matrix[this.y][this.x] = 0;

        for (let i in jurcrichArr) {
            if (jurcrichArr[i].x == this.x && jurcrichArr[i].y == this.y) {
                jurcrichArr.splice(i, 1)
            }
        }
    }
}