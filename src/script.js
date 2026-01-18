import Temas from "./classes/Temas.js";


import Game from "./classes/Game.js";
import Grid from "./classes/Grid.js";
import Player from "./classes/Player.js";

let gridRows = 5;
let gridCols = 5;

const tema = new Temas;
const game = new Game(gridRows, gridCols);
const ctx = game.ctx;
const canvasWidth = game.canvasWidth;
const canvasHeight = game.canvasHeight;

const grid = new Grid(ctx, gridRows, gridCols, canvasWidth, canvasHeight);
const player = new Player(ctx, grid.mids, grid.gridVertices);

grid.drawCells();


const rightBtn = document.getElementById('right');
const leftBtn = document.getElementById("left");
const upBtn = document.getElementById("up");
const downBtn = document.getElementById("down");

function mover() {
    rightBtn.addEventListener('click', () => player.moveRight());
    leftBtn.addEventListener('click', () => player.moveLeft());
    upBtn.addEventListener('click', () => player.moveUp());
    downBtn.addEventListener('click', () => player.moveDown());
}

mover();

function gameLoop2() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    player.update();
    grid.drawGrid();
    grid.drawCells();
    grid.drawMidPoints();
    requestAnimationFrame(gameLoop2);
}


gameLoop2();
