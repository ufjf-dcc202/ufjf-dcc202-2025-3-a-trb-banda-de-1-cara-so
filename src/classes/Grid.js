// classe pra setar um grid

class Grid {
    constructor(ctx, rows, cols, canvasWidth, canvasHeight) {
        console.log("new grid");

        this.ctx = ctx;
        this.rows = rows;
        this.cols = cols;

        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;

        this.cellSize = 0;
        this.offsetX = 0; // definir offset pro centro
        this.offsetY = 0; // ou fazer o grid ocupar todo o canvas

        // criando um array 2d vazio
        this.gridVertices = Array(this.rows + 1).fill().map(() => Array(this.cols + 1));
        this.mids = Array(this.rows).fill().map(() => Array(this.cols));

        // iniciar auto certas funções básicas
        this.calculateGrid();
        this.createGrid();
    }


    calculateGrid() {
        // conta pra centralizar o grid e dimensionar pra caber

        // 
        const maxWidth = this.canvasWidth / this.cols;
        const maxHeight = this.canvasHeight / this.rows;

        this.cellSize = Math.min(maxWidth, maxHeight);

        this.gridWidth = this.cols * this.cellSize;
        this.gridHeight = this.rows * this.cellSize;

        this.offsetX = (this.canvasWidth - this.gridWidth) / 2;
        this.offsetY = (this.canvasHeight - this.gridHeight) / 2;
    }

    createGrid() {
        //preenchendo a(s) linhas com coordenadas iniciais
        for (let r = 0; r < this.rows + 1; r++) {
            for (let c = 0; c < this.cols + 1; c++) {
                this.gridVertices[r][c] = {
                    x: c * this.cellSize + this.offsetX,
                    y: r * this.cellSize + this.offsetY
                };
            }
        }
        //preenchendo o array mids
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                this.mids[r][c] = {
                    x: (c * this.cellSize) + this.cellSize / 2 + this.offsetX,
                    y: (r * this.cellSize) + this.cellSize / 2 + this.offsetY,
                };
            }
        }


    }

    drawMidPoints() {
        // draw mid points
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                this.ctx.fillStyle = "white";
                this.ctx.beginPath();
                this.ctx.arc(this.mids[r][c].x, this.mids[r][c].y, 3, 0, 2 * Math.PI);
                this.ctx.fill();
            }
        }
        // pra debug, escrever coordenadas
        this.ctx.fillStyle = "#666";
        this.ctx.font = "12px Arial";
        this.ctx.textAlign = "center";

        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                this.ctx.fillText(`${r},${c}`, this.mids[r][c].x, this.mids[r][c].y - 10);
                this.ctx.fillText(`${Math.floor(this.mids[r][c].x)},${Math.floor(this.mids[r][c].y)}`, this.mids[r][c].x, this.mids[r][c].y + 20);
            }
        }
    }

    drawGrid() {
        // draw lines
        for (let r = 0; r < this.rows + 1; r++) {
            this.ctx.strokeStyle = `#ffff4e66`;
            this.ctx.lineWidth = 2;

            const lastCol = this.cols;
            this.ctx.beginPath();
            this.ctx.moveTo(this.gridVertices[r][0].x, this.gridVertices[r][0].y);
            this.ctx.lineTo(this.gridVertices[r][lastCol].x, this.gridVertices[r][lastCol].y);
            this.ctx.stroke();
        }
        //draw columns
        for (let c = 0; c < this.cols + 1; c++) {
            this.ctx.strokeStyle = `#4effff66`;
            this.ctx.lineWidth = 2;

            const lastRow = this.rows;
            this.ctx.beginPath();
            this.ctx.moveTo(this.gridVertices[0][c].x, this.gridVertices[0][c].y);
            this.ctx.lineTo(this.gridVertices[lastRow][c].x, this.gridVertices[lastRow][c].y);
            this.ctx.stroke();
        }
    }

    drawCells() {
        //draw round rect
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                const smol = 1.4;
                const smolCellSize = this.cellSize / smol;
                const roundOffset = (this.cellSize - this.cellSize / smol) / 2;
                this.ctx.strokeStyle = `#ffffffaa`;
                this.ctx.lineWidth = 5;


                this.ctx.beginPath();
                this.ctx.roundRect(this.gridVertices[r][c].x + roundOffset, this.gridVertices[r][c].y + roundOffset, smolCellSize, smolCellSize, 15);
                this.ctx.stroke();
            }
        }
    }


}


export default Grid;
