class Game {
    constructor(gridRows, gridCols) {
        console.log("new game");

        this.loadImages();

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

    async loadImages() {
        await Promise.all(
            Array.from(document.images).map(
                (image) =>
                    new Promise((resolve) => image.addEventListener("load", (resolve))),
            ),
        );
    }

}

export default Game;
