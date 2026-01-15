const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;



class Board{
    constructor (cellWidth,cellHeight,cols, rows){
        this.cellW = cellWidth;
        this.cellH = cellHeight;
        this.rows = rows;
        this.cols = cols;
    }
    drawGrid(){
    for (let c = 0; c < this.cols; c++){
        for (let r = 0; r < this.rows; r++){
            ctx.strokeStyle = "blue";
            ctx.strokeRect(c*this.cellW, r*this.cellH, this.cellW, this.cellH);
            //ctx.strokeRect(j*this.width, i*this.height, this.width, this.height);
        }
    }
    }
    
}

const teste = new Board(100, 100, 5, 5);
teste.drawGrid();


