class Game {
    constructor(gridRows, gridCols) {
        console.log("new game");

        this.canvas = document.getElementById("jogo");
        this.ctx = this.canvas.getContext("2d");

        console.log(this.canvas);

        this.gridRows = gridRows;
        this.gridCols = gridCols;



        this.setCanvasSize();

    }

    setCanvasSize() {
        if (this.gridRows == this.gridCols) {
            this.canvasSize = Math.min(innerWidth, innerHeight);
            this.canvasWidth = this.canvasSize;
            this.canvasHeight = this.canvasSize;
        }
        if (this.gridRows > this.gridCols) {
            const cellSize = Math.floor(innerHeight / this.gridRows);
            this.canvasWidth = cellSize * this.gridCols;
            this.canvasHeight = cellSize * this.gridRows;
        }
        if (this.gridRows < this.gridCols) {
            const cellSize = Math.floor(innerWidth / this.gridRows);
            this.canvasWidth = cellSize * this.gridCols;
            this.canvasHeight = cellSize * this.gridRows;
        }
        this.canvas.width = this.canvasWidth;
        this.canvas.height = this.canvasHeight;


    }




    // if (gridAspectRatio > windowAspectRatio) {
    //     // Grid is wider than window - limit by width
    //     canvasWidth = window.innerWidth * 0.9; // 90% of width
    //     canvasHeight = canvasWidth / gridAspectRatio;
    // } else {
    //     // Grid is taller than window - limit by height
    //     canvasHeight = window.innerHeight * 0.9; // 90% of height
    //     canvasWidth = canvasHeight * gridAspectRatio;
    // }

    // // Round to whole pixels
    // canvasWidth = Math.floor(canvasWidth);
    // canvasHeight = Math.floor(canvasHeight);

    // // Calculate cell size (should be integer for clean grid)
    // const cellSizeX = canvasWidth / cols;
    // const cellSizeY = canvasHeight / rows;

    // // Use the smaller cell size to ensure everything fits
    // const cellSize = Math.min(cellSizeX, cellSizeY);

    // // Recalculate canvas with whole cell sizes
    // this.canvasWidth = Math.floor(cols * cellSize);
    // this.canvasHeight = Math.floor(rows * cellSize);

}

export default Game;
