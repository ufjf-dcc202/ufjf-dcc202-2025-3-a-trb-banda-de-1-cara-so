const canvas = document.getElementById("jogo");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

console.log("oi");

class Board {
    constructor(rows, cols, cellSize) {
        this.cellSize = cellSize;
        this.rows = rows;
        this.cols = cols;
        // criando um array 2d vazio
        this.grid = Array(this.rows + 1).fill().map(() => Array(this.cols + 1));
        this.mids = Array(this.rows).fill().map(() => Array(this.cols));
        // iniciar auto certas funções básicas
        this.gridArrayFill();
    }


    gridArrayFill() {
        //preenchendo a(s) linhas com coordenadas iniciais
        for (let r = 0; r < this.rows + 1; r++) {
            for (let c = 0; c < this.cols + 1; c++) {
                this.grid[r][c] = {
                    x: c * this.cellSize,
                    y: r * this.cellSize
                };
            }
        }
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                this.mids[r][c] = {
                    x: (c * this.cellSize) + this.cellSize / 2,
                    y: (r * this.cellSize) + this.cellSize / 2,
                };
            }
        }


    }



    drawGrid() {
        // draw mid points
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                ctx.fillStyle = "white";
                ctx.fillRect(this.mids[r][c].x, this.mids[r][c].y, 5, 5);
            }
        }
        // draw lines
        for (let r = 0; r < this.rows + 1; r++) {
            const cor = [50 * r, 100, 50];
            ctx.strokeStyle = `hsl(${cor[0]}, ${cor[1]}%, ${cor[2]}%)`;
            ctx.lineWidth = 2;

            const lastCol = this.cols;
            ctx.beginPath();
            ctx.moveTo(this.grid[r][0].x, this.grid[r][0].y);
            ctx.lineTo(this.grid[r][lastCol].x, this.grid[r][lastCol].y);
            ctx.stroke();
        }
        //draw columns
        for (let c = 0; c < this.cols + 1; c++) {
            const cor = [50 * c, 100, 50];
            ctx.strokeStyle = `hsl(${cor[0]}, ${cor[1]}%, ${cor[2]}%)`;
            ctx.lineWidth = 2;

            const lastRow = this.rows;
            ctx.beginPath();
            ctx.moveTo(this.grid[0][c].x, this.grid[0][c].y);
            ctx.lineTo(this.grid[lastRow][c].x, this.grid[lastRow][c].y);
            ctx.stroke();
        }
    }
}

const tabuleiro = new Board(6, 3, 100);

console.log(this.grid);
console.log(this.mids);

// as dimensões estão meio malucas
// 
// fazer player class: usar svg, img ou canvas?
// fazer colisão de obj
// fazer botoes de movimento
// fazer animações
let x = 10;
let y = 10;
// desenha algo
function ponto(px, py) {
    ctx.fillStyle = "magenta";
    ctx.fillRect(px, py, 30, 30);
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    tabuleiro.drawGrid();
    ponto(x, y);
    x++;
    y++;
    requestAnimationFrame(gameLoop);

}

gameLoop();
