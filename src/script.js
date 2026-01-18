import Grid from "./classes/Grid.js";
import Player from "./classes/Player.js";


const themeDarkween = document.getElementById("darkween");
const themeMadruga = document.getElementById("madruga");
const themeLightween = document.getElementById("lightween");
const themeSwomp = document.getElementById("swomp");

// themes
themeDarkween.addEventListener('click', () => {
    document.documentElement.setAttribute('data-theme', 'darkween');
});
themeMadruga.addEventListener('click', () => {
    document.documentElement.setAttribute('data-theme', 'madruga');
});
themeLightween.addEventListener('click', () => {
    document.documentElement.setAttribute('data-theme', 'lightween');
});
themeSwomp.addEventListener('click', () => {
    document.documentElement.setAttribute('data-theme', 'swomp');
});


const canvas = document.getElementById("jogo");
const ctx = canvas.getContext("2d");

const screen = Math.min(innerWidth, innerHeight);

canvas.width = screen;
canvas.height = screen;

//if (window.innerWidth / innerHeight > 0.7) {
//    canvas.width = 800;
//    canvas.height = 600;
//} else {
//    canvas.width = 600;
//    canvas.height = 800;
//}

console.log(window.innerHeight / window.innerWidth);

// get buttons
const rightBtn = document.getElementById('right');
const leftBtn = document.getElementById("left");
const upBtn = document.getElementById("up");
const downBtn = document.getElementById("down");

console.log("oi");

const grid = new Grid(5, 5, canvas.width, canvas.height);
const player = new Player(grid.mids, grid.gridVertices);


//console.log(grid.mids);
//console.log(grid.gridVertices);
//const teste = grid.mids.length;
//console.log(teste);

// separar main menu e fases

// as dimensões estão meio malucas

// fazer player class: usar svg, img ou canvas?
// fazer colisão de obj

// fazer animações

//function checkCollision(obj1, obj2) {
//    if (obj1.x = obj2.x)
//}


/* teste de animação
let x = 10;
let y = 10;
let dx = 5;
let dy = 5;
let o = 10;


// desenha algo
function ponto(px, py, o) {
    ctx.fillStyle = `hsl(${o},100%,50%)`;
    ctx.fillRect(px, py, 30, 30);
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    grid.drawGrid(ctx);

    ponto(x, y, o);

    if ((x) < 0) {
        dx = -dx;
        o += 10;
    }
    if ((x + 30) == canvas.width - 2) {
        dx = -dx;
        o += 10;
    }

    if ((y) < 0) {
        dy = -dy;
        o += 10;
    }
    if ((y + 30) == canvas.height - 1) {
        dy = -dy;
        o += 10;
    }

    x += dx;
    y += dy;

    //console.log(y);

    requestAnimationFrame(gameLoop);

}
*/

rightBtn.addEventListener('click', () => player.moveRight());
leftBtn.addEventListener('click', () => player.moveLeft());
upBtn.addEventListener('click', () => player.moveUp());
downBtn.addEventListener('click', () => player.moveDown());

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    grid.drawGrid(ctx);
    player.drawPlayer(ctx);
    player.update();

    requestAnimationFrame(gameLoop);
    console.log("fim");
}
// ponto(canvas.width / 2, canvas.height / 2);


gameLoop();
