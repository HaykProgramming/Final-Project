function setup() {
    var socket = io();
    var matrix = [];
    var side = 30;

    let weatherElement = document.getElementById('weather')
    let grassCountElement = document.getElementById('grassCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let vagrCountElement = document.getElementById('vagrCount');
    let rainCountElement = document.getElementById('rainCount');
    let jurcrichCountElement = document.getElementById('jurcrichCount');
    let titanCountElement = document.getElementById('titanCount');


    let grassLiveCountElement = document.getElementById('grassLiveCount');
    let grassEaterLiveCountElement = document.getElementById('grassEaterLiveCount');
    let vagrLiveCountElement = document.getElementById('vagrLiveCount');
    let rainLiveCountElement = document.getElementById('rainLiveCount');
    let jurcrichLiveCountElement = document.getElementById('jurcrichLiveCount');
    let titanLiveCountElement = document.getElementById('titanLiveCount');


    socket.on("data", drawCreatures);

    function drawCreatures(data) {

        matrix = data.matrix;
        weatherElement.innerText = data.weather;
        grassCountElement.innerText = data.grassCounter;
        grassLiveCountElement.innerText = data.grassLiveCounter;

        grassEaterLiveCountElement.innerText = data.grassEaterLiveCounter;
        grassEaterCountElement.innerText = data.grassEaterCounter;
        
        vagrLiveCountElement.innerText = data.vagrLiveCounter;
        vagrCountElement.innerText = data.vagrCounter;
        
        rainLiveCountElement.innerText = data.rainLiveCounter;
        rainCountElement.innerText = data.rainCounter;
        
        jurcrichLiveCountElement.innerText = data.jurcrichLiveCounter;
        jurcrichCountElement.innerText = data.jurcrichCounter;
        
        titanLiveCountElement.innerText = data.titanLiveCounter;
        titanCountElement.innerText = data.titanCounter;



        createCanvas(matrix[0].length * side, matrix.length * side)

        background('#acacac');


        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    if (data.weather == "Summer") {
                        fill("green");
                    } else if (data.weather == "Autumn") {
                        fill("#53cc1b");
                    }
                    else if (data.weather == "Winter") {
                        fill("#b7f59a");
                    }
                    else if (data.weather == "Spring") {
                        fill("#6eeb34");
                    }
                } else if (matrix[i][j] == 2) {
                    if (data.weather == "Summer") {
                        fill("#abad15");
                    } else if (data.weather == "Autumn") {
                        fill("#9fa12f");
                    }
                    else if (data.weather == "Winter") {
                        fill("#f3f598");
                    }
                    else if (data.weather == "Spring") {
                        fill("#fcff26");
                    }
                } else if (matrix[i][j] == 0) {
                    fill('#acacac');
                } else if (matrix[i][j] == 3) {
                    if (data.weather == "Summer") {
                        fill("#fa0000");
                    } else if (data.weather == "Autumn") {
                        fill("#700707");
                    }
                    else if (data.weather == "Winter") {
                        fill("#f59898");
                    }
                    else if (data.weather == "Spring") {
                        fill("#00ff44");
                    }
                } else if (matrix[i][j] == 4) {
                    if (data.weather == "Summer") {
                        fill("#0051ff");
                    } else if (data.weather == "Autumn") {
                        fill("#427bf5");
                    }
                    else if (data.weather == "Winter") {
                        fill("#68e2f2");
                    }
                    else if (data.weather == "Spring") {
                        fill("#68b9f2");
                    }
                } else if (matrix[i][j] == 5) {
                    if (data.weather == "Summer") {
                        fill("#a600ff");
                    } else if (data.weather == "Autumn") {
                        fill("#dd00ff");
                    }
                    else if (data.weather == "Winter") {
                        fill("#ff00b7");
                    }
                    else if (data.weather == "Spring") {
                        fill("#00ff44");
                    }
                }else if (matrix[i][j] == 6) {
                    if (data.weather == "Summer") {
                        fill("#000000");
                    } else if (data.weather == "Autumn") {
                        fill("#403c3c");
                    }
                    else if (data.weather == "Winter") {
                        fill("#212121");
                    }
                    else if (data.weather == "Spring") {
                        fill("#545454");
                    }
                }
                rect(j * side, i * side, side, side);
            }
        }
    }

}
// let grassArr = [];
// let grassEaterArr = [];
// let vagrArr = []
// let rainArr = [];
// let jurcrichArr = []

// function setup() {
//     matrixGenerator(20, 50, 40, 6, 3, 5);
//     frameRate(8);
//     createCanvas(matrix[0].length * side, matrix.length * side);
//     background('#acacac');
//     for (var y = 0; y < matrix.length; y++) {
//         for (var x = 0; x < matrix[y].length; x++) {
//             if (matrix[y][x] == 1) {
//                 let grass = new Grass(x, y);
//                 grassArr.push(grass);
//             }
//             if (matrix[y][x] == 2) {
//                 let grassEater = new GrassEater(x, y);
//                 grassEaterArr.push(grassEater);
//             }
//             if (matrix[y][x] == 3) {
//                 let vagr = new Vagr(x, y);
//                 vagrArr.push(vagr);
//             }
//             if (matrix[y][x] == 4) {
//                 let rain = new Rain(x, y);
//                 rainArr.push(rain);
//             }
//             if (matrix[y][x] == 5) {
//                 let jurcrich = new Jurcrich(x, y);
//                 jurcrichArr.push(jurcrich);
//             }
//         }
//     }
//     function matrixGenerator(matrixSize, grass, grassEater, vagr, rain, jurcrich) {
//         for (let i = 0; i < matrixSize; i++) {
//             matrix[i] = [];
//             for (let o = 0; o < matrixSize; o++) {
//                 matrix[i][o] = 0;
//             }
//         }
//         for (let i = 0; i < grass; i++) {
//             let customX = Math.floor(random(0, matrixSize));
//             let customY = Math.floor(random(0, matrixSize));
//             matrix[customY][customX] = 1;
//         }
//         for (let i = 0; i < grassEater; i++) {
//             let customX = Math.floor(random(0, matrixSize));
//             let customY = Math.floor(random(0, matrixSize));
//             matrix[customY][customX] = 2;
//         }
//         for (let i = 0; i < vagr; i++) {
//             let customX = Math.floor(random(0, matrixSize));
//             let customY = Math.floor(random(0, matrixSize));
//             matrix[customY][customX] = 3;
//         }
//         for (let i = 0; i < rain; i++) {
//             let customX = Math.floor(random(0, matrixSize));
//             let customY = Math.floor(random(0, matrixSize));
//             matrix[customY][customX] = 4;
//         }
//         for (let i = 0; i < jurcrich; i++) {
//             let customX = Math.floor(random(0, matrixSize));
//             let customY = Math.floor(random(0, matrixSize));
//             matrix[customY][customX] = 5;
//         }
//     }
// }

// function draw() {
//     for (var y = 0; y < matrix.length; y++) {
//         for (var x = 0; x < matrix[y].length; x++) {
//             if (matrix[y][x] == 1) {
//                 fill("green");
//             }
//             else if (matrix[y][x] == 0) {
//                 fill("#acacac");
//             }
//             else if (matrix[y][x] == 2) {
//                 fill("orange");
//             }
//             else if (matrix[y][x] == 3) {
//                 fill("red");
//             }
//             else if (matrix[y][x] == 4) {
//                 fill("blue");
//             }
//             else if (matrix[y][x] == 5) {
//                 fill("magenta");
//             }
//             rect(x * side, y * side, side, side);

//         }
//     }
//     for (var i in grassArr) {
//         grassArr[i].mul();
//     }

//     for (var i in grassEaterArr) {
//         grassEaterArr[i].eat();
//     }
//     for (var i in vagrArr) {
//         vagrArr[i].utel();
//     }
//     for (var i in rainArr) {
//         rainArr[i].ml();
//     }
//     for (var i in jurcrichArr) {
//         jurcrichArr[i].kcel();
//     }
// }
