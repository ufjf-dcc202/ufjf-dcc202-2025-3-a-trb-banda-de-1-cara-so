// classe pra setar um grid

class Grid {
    constructor(rows, cols, canvasWidth, canvasHeight) {
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



    drawGrid(ctx) {
        // draw mid points
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                ctx.fillStyle = "white";
                ctx.fillRect(this.mids[r][c].x, this.mids[r][c].y, 5, 5);
            }
        }
        // draw lines
        for (let r = 0; r < this.rows + 1; r++) {
            //const cor = [50 * r, 100, 50];
            //ctx.strokeStyle = `hsl(${cor[0]}, ${cor[1]}%, ${cor[2]}%)`;
            ctx.strokeStyle = "lightBlue";
            ctx.lineWidth = 2;

            const lastCol = this.cols;
            ctx.beginPath();
            ctx.moveTo(this.gridVertices[r][0].x, this.gridVertices[r][0].y);
            ctx.lineTo(this.gridVertices[r][lastCol].x, this.gridVertices[r][lastCol].y);
            ctx.stroke();
        }
        //draw columns
        for (let c = 0; c < this.cols + 1; c++) {
            //const cor = [50 * c, 100, 50];
            //ctx.strokeStyle = `hsl(${cor[0]}, ${cor[1]}%, ${cor[2]}%)`;
            ctx.strokeStyle = "gold";
            ctx.lineWidth = 2;

            const lastRow = this.rows;
            ctx.beginPath();
            ctx.moveTo(this.gridVertices[0][c].x, this.gridVertices[0][c].y);
            ctx.lineTo(this.gridVertices[lastRow][c].x, this.gridVertices[lastRow][c].y);
            ctx.stroke();
        }

        // pra debug, escrever coordenadas
        ctx.fillStyle = "#666";
        ctx.font = "12px Arial";
        ctx.textAlign = "center";

        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                ctx.fillText(`${r},${c}`, this.mids[r][c].x, this.mids[r][c].y);
            }
        }
    }
}


export default Grid;
