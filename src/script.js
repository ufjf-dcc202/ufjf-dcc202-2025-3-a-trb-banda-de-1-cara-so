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



const rotateClockBtn = document.getElementById('rotateClock');
const rotateAntiBtn = document.getElementById('rotateAnti');
const forwardBtn = document.getElementById('forward');
const jumpBtn = document.getElementById('jump');

function mover() {
    rotateClockBtn.addEventListener('click', () => player.rotateClock++);
    rotateAntiBtn.addEventListener('click', () => player.rotateAnti++);
    forwardBtn.addEventListener('click', () => player.moves++);
    jumpBtn.addEventListener('click', () => player.jumps++);

}

mover();

function gameLoop2() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    player.update();
    // dps coloca um grid.update()
    grid.drawGrid();
    grid.drawCells();
    grid.drawMidPoints();
    requestAnimationFrame(gameLoop2);
}


gameLoop2();
