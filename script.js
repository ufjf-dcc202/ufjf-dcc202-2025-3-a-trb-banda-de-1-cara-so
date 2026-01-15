const canvas = document.getElementById("jogo");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

console.log("oi");

class Board {
    constructor(cols, rows, cellSize) {
        this.cellSize = cellSize;
        this.rows = rows + 1;
        this.cols = cols + 1;
        // criando um array 2d vazio
        this.grid = Array(this.rows).fill().map(() => Array(this.cols));
        // funções básicas
        this.gridArrayFill();

        this.drawGrid();

    }


    gridArrayFill() {

        //preenchendo a(s) linhas com coordenadas iniciais
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                this.grid[r][c] = {
                    x: c * this.cellSize,
                    y: r * this.cellSize
                };
            }
        }
        console.log(this.grid);
    }

    midPlace(row, col) {
        return {
            x: this.grid[row][col].x + this.cellSize / 2,
            y: this.grid[row][col].y + this.cellSize / 2,
        }
    }

    drawGrid() {

        // for (let r = 0; r < this.rows; r++) {
        //     for (let c = 0; c < this.cols; c++) {
        //         let mid = midPlace(r, c);
        //         //const cor = [25 * r, 100, 50 + c * 10];
        //         //ctx.strokeStyle = "hsl(${this.cor[0]}, ${this.cor[1]}, ${this.cor[2]})";
        //         ctx.strokeStyle = "#ffffffbb";
        //         ctx.strokeRect(mid.x, mid.y, -5, 5);
        //     }
        // }
        // draw lines
        for (let r = 0; r < this.rows; r++) {
            ctx.strokeStyle = "#0044ffff";
            ctx.lineWidth = 2;

            const lastCol = this.cols - 1;
            ctx.beginPath();
            ctx.moveTo(this.grid[r][0].x, this.grid[r][0].y);
            ctx.lineTo(this.grid[r][lastCol].x, this.grid[r][lastCol].y);
            ctx.stroke();
        }
        //draw columns
        for (let c = 0; c < this.cols; c++) {
            ctx.strokeStyle = "#ff0040ff";
            ctx.lineWidth = 2;

            const lastRow = this.rows - 1;
            ctx.beginPath();
            ctx.moveTo(this.grid[0][c].x, this.grid[0][c].y);
            ctx.lineTo(this.grid[lastRow][c].x, this.grid[lastRow][c].y);
            ctx.stroke();
        }
    }

}

const teste = new Board(2, 2, 100);
console.log("teste alo");
