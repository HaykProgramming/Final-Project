//! Requiring modules  --  START
var Grass = require("./modules/Grass.js");
var GrassEater = require("./modules/GrassEater.js");
var Vagr = require("./modules/Vagr.js");
var Rain = require("./modules/Rain.js");
var Jurcrich = require("./modules/Jurcrich.js");
var Titan = require("./modules/Titan.js");
let random = require('./modules/random.js');
//! Requiring modules  --  END

//! Initializing global arrays  --  START
grassArr = [];
grassEaterArr = [];
vagrArr = [];
rainArr = [];
jurcrichArr = [];
titanArr = [];
matrix = [];
//! Initializing global arrays  --  END

// statistics start
grassHashiv = 0;
grassEaterHashiv = 0;
vagrHashiv = 0;
rainHashiv = 0;
jurcrichHashiv = 0;
titanHashiv = 0;
// statistics end

// time = 0
//! Creating MATRIX -- START

function matrixGenerator(matrixSize, grass, grassEater, vagr, rain, jurcrich, titan) {
    for (let i = 0; i < matrixSize; i++) {
        matrix[i] = [];
        for (let o = 0; o < matrixSize; o++) {
            matrix[i][o] = 0;
        }
    }
    for (let i = 0; i < grass; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 1;
    }
    for (let i = 0; i < grassEater; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 2;
    }
    for (let i = 0; i < vagr; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 3;
    }
    for (let i = 0; i < rain; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 4;
    }
    for (let i = 0; i < jurcrich; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 5;
    }
    for (let i = 0; i < titan; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 6;
    }
}
matrixGenerator(20, 25, 20, 15, 12, 5, 6);



//! Creating MATRIX -- END

//! SERVER STUFF  --  START
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);
//! SERVER STUFF END  --  END

function creatingObjects() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var grassEater = new GrassEater(x, y);
                grassEaterArr.push(grassEater);
                grassEaterHashiv++;
            } else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                grassArr.push(grass);
                grassHashiv++
            }
            else if (matrix[y][x] == 3) {
                var vagr = new Vagr(x, y);
                vagrArr.push(vagr);
                vagrHashiv++
            }
            else if (matrix[y][x] == 4) {
                var rain = new Rain(x, y);
                rainArr.push(rain);
                rainHashiv++
            }
            else if (matrix[y][x] == 5) {
                var jurcrich = new Jurcrich(x, y);
                jurcrichArr.push(jurcrich);
                jurcrichHashiv++
            }
            else if (matrix[y][x] == 6) {
                var titan = new Titan(x, y);
                titanArr.push(titan);
                titanHashiv++
            }
        }
    }
}

creatingObjects();

let exanak = 0;
let weather = "winter"

function game() {

    exanak++;
    if (exanak <= 10) {
        weather = "Summer"
    } else if (exanak <= 20) {
        weather = "Autumn"
    } 
    else if (exanak <= 20) {
        weather = "Winter"
    }else if (exanak <= 20) {
        weather = "Spring"
    }
    else if (exanak > 20) {
        exanak = 0
    }

    if (grassArr[0] !== undefined) {
        for (var i in grassArr) {
            grassArr[i].mul();
        }
    }
    if (grassEaterArr[0] !== undefined) {
        for (var i in grassEaterArr) {
            grassEaterArr[i].eat();
        }
    }
    if (vagrArr[0] !== undefined) {
        for (var i in vagrArr) {
            vagrArr[i].utel();
        }
    }
    if (rainArr[0] !== undefined) {
        for (var i in rainArr) {
            rainArr[i].mul();
        }
    }
    // if (rainArr[0] !== undefined) {
    //     for (var i in rainArr) {
    //         rainArr[i].mul();
    //     }
    // }
    if (jurcrichArr[0] !== undefined) {
        for (var i in jurcrichArr) {
            jurcrichArr[i].kcel();
        }
    }
    if (titanArr[0] !== undefined) {
        for (var i in titanArr) {
            titanArr[i].eat();
        }
    }

    //! Object to send
    let sendData = {
        matrix: matrix,
        grassCounter: grassHashiv,
        grassLiveCounter: grassArr.length,

        grassEaterLiveCounter: grassEaterArr.length,
        grassEaterCounter: grassEaterHashiv,

        vagrLiveCounter: vagrArr.length,
        vagrCounter: vagrHashiv,

        rainLiveCounter: rainArr.length,
        rainCounter: rainHashiv,

        jurcrichLiveCounter: jurcrichArr.length,
        jurcrichCounter: jurcrichHashiv,

        titanLiveCounter: titanArr.length,
        titanCounter: titanHashiv,

        weather: weather
    }


    //! Send data over the socket to clients who listens "data"
    io.sockets.emit("data", sendData);
}



setInterval(game, 1000)