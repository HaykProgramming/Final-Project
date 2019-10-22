var LiveForm = require("./LiveForm");
var random = require("./random.js");



module.exports = class Titan extends LiveForm {
    constructor(x, y) {
        super(x, y);
        this.life = 1000;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x + 1, 10],
            [this.x + 1, 11],
            [this.x + 1, 9],   
            [this.x - 1, 10],
            [this.x - 1, 11],
            [this.x - 1, 9],
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
            titanHashiv++
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 6;
            let titan = new Titan(x, y);
            titanArr.push(titan);
            this.life = 62000;
        }
    }
    eat() {
        let emptyCells   = this.chooseCell(1);
        let emptyCells1  = this.chooseCell(2);
        let emptyCells2  = this.chooseCell(3);
        let emptyCells3  = this.chooseCell(4);
        let emptyCells4  = this.chooseCell(5);

        let newCell = random(emptyCells.concat(emptyCells1.concat(emptyCells2.concat(emptyCells3.concat(emptyCells4)))));

        if (newCell) {

            this.life++;
            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 6;
            matrix[this.y][this.x] = 0;

            for (let i in grassArr) {
                if (grassArr[i].x == x && grassArr[i].y == y) {
                    grassArr.splice(i, 1)
                }
            }
            for (let i in grassEaterArr) {
                if (grassEaterArr[i].x == x && grassEaterArr[i].y == y) {
                    grassEaterArr.splice(i, 1)
                }
            } for (let i in vagrArr) {
                if (vagrArr[i].x == x && vagrArr[i].y == y) {
                    vagrArr.splice(i, 1)
                }
            } for (let i in rainArr) {
                if (rainArr[i].x == x && rainArr[i].y == y) {
                    rainArr.splice(i, 1)
                }
            } for (let i in jurcrichArr) {
                if (jurcrichArr[i].x == x && jurcrichArr[i].y == y) {
                    jurcrichArr.splice(i, 1)
                }
            }
            this.x = x;
            this.y = y;

            if (this.life >= 13) {
                this.mul();
            }
        }
        else {
            this.move()
        }
    }
    move() {
        this.life--;
        let emptyCells = this.chooseCell(0);
        let emptyCells1 = this.chooseCell(1);
        let emptyCells2 = this.chooseCell(2);
        let emptyCells3 = this.chooseCell(3);
        let emptyCells4 = this.chooseCell(4);
        let emptyCells5 = this.chooseCell(5);
        let emptyCells6 = this.chooseCell(6);

        let newCell = random(emptyCells.concat(emptyCells1.concat(emptyCells2.concat(emptyCells3.concat(emptyCells4.concat(emptyCells5.concat(emptyCells6)))))));

        

        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 6;
            matrix[this.y][this.x] = 0;
            this.y = y;
            this.x = x;
        }
        if (this.life < 0) {
            this.die();
        }
    }
    die() {
        matrix[this.y][this.x] = 0;

        for (let i in titanArr) {
            if (titanArr[i].x == this.x && titanArr[i].y == this.y) {
                titanArr.splice(i, 1)
            }
        }
    }
}