// classe pra setar um grid

class Grid {
    constructor(rows, cols, cellSize, canvasHeight, canvasWidth) {
        this.cellSize = cellSize;
        this.rows = rows;
        this.cols = cols;
        this.xOffset = 100; // definir offset pro centro
        this.yOffset = 100; // 
        // criando um array 2d vazio
        this.gridVertices = Array(this.rows + 1).fill().map(() => Array(this.cols + 1));
        this.mids = Array(this.rows).fill().map(() => Array(this.cols));
        // iniciar auto certas funções básicas
        this.fillCoordinatesArray();
    }


    fillCoordinatesArray() {
        //preenchendo a(s) linhas com coordenadas iniciais
        for (let r = 0; r < this.rows + 1; r++) {
            for (let c = 0; c < this.cols + 1; c++) {
                this.gridVertices[r][c] = {
                    x: c * this.cellSize + this.xOffset,
                    y: r * this.cellSize + this.yOffset
                };
            }
        }
        //preenchendo o array mids
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                this.mids[r][c] = {
                    x: (c * this.cellSize) + this.cellSize / 2 + this.xOffset,
                    y: (r * this.cellSize) + this.cellSize / 2 + this.yOffset,
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
    }
}

export default Grid;
