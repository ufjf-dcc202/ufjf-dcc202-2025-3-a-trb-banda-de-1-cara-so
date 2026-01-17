import Grid from "./classes/Grid.js";

const canvas = document.getElementById("jogo");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

//set midnight
let midText = "#E0E4FC";
let midBackground = "#040722";
let midPrimary = "#798AF1";
let midSecondary = "#44109F";
let midAccent = "#AA35EA";


console.log("oi");

const grid = new Grid(3, 3, 100, canvas.width, canvas.height);

console.log(grid.grid);
console.log(grid.mids);

// as dimensões estão meio malucas
// 
// fazer player class: usar svg, img ou canvas?
// fazer colisão de obj
// fazer botoes de movimento
// fazer animações
let x = 10;
let y = 10;
let dx = 1;
let dy = 1;
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
    if ((x + 30) == canvas.width - 1) {
        dx = -dx;
        o += 10;
    }

    if ((y) < 0) {
        dy = -dy;
        o += 10;
    }
    if ((y + 30) == canvas.height) {
        dy = -dy;
        o += 10;
    }

    x += dx;
    y += dy;


    requestAnimationFrame(gameLoop);

}

ponto(canvas.width / 2, canvas.height / 2);


gameLoop();
