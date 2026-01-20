import Grid from "./Grid.js";

class Player {
    constructor(ctx, gridPoints, gridVertices) {
        console.log("new player");

        this.ctx = ctx;

        this.gridPoints = gridPoints;
        this.gridVertices = gridVertices;
        this.finalRow = this.gridPoints.length - 1;
        this.finalCol = this.gridPoints[0].length - 1;
        this.xLimit = this.gridPoints[0][this.finalCol].x;
        this.yLimit = this.gridPoints[this.finalRow][0].y;

        console.log(this.gridPoints);
        console.log(this.gridVertices);

        console.log(this.finalRow);
        console.log(this.finalCol);


        this.position = gridVertices;
        this.rowPosition = 0;
        this.colPosition = 0;
        this.xPosition = this.position[this.rowPosition][this.colPosition].x;
        this.yPosition = this.position[this.rowPosition][this.colPosition].y;
        this.xTarget = this.xPosition;
        this.yTarget = this.yPosition;
        this.gridCellSize = this.gridVertices[0][1].x - this.gridVertices[0][0].x;

        this.direction = 'right';
        this.rotateClock = 0;
        this.rotateAnti = 0;

        this.isMoving = false;
        this.setSprite();
    }

    setSprite() {
        this.sRight = new Image();
        this.sRight.src = './src/assets/kenney_cursor-pack/Vector/Outline/arrow_e.svg';
        this.sDown = new Image();
        this.sDown.src = './src/assets/kenney_cursor-pack/Vector/Outline/arrow_s.svg';
        this.sLeft = new Image();
        this.sLeft.src = './src/assets/kenney_cursor-pack/Vector/Outline/arrow_w.svg';
        this.sUp = new Image();
        this.sUp.src = './src/assets/kenney_cursor-pack/Vector/Outline/arrow_n.svg';
    }

    calculateDirection() {
        if (this.rotateClock > 0) {
            switch (this.direction) {
                case 'right':
                    this.rotateClock--;
                    return this.direction = 'down'
                case 'down':
                    this.rotateClock--;
                    return this.direction = 'left'
                case 'left':
                    this.rotateClock--;
                    return this.direction = 'up'
                case 'up':
                    this.rotateClock--;
                    return this.direction = 'right'
            }
        }
        if (this.rotateAnti > 0) {
            switch (this.direction) {
                case 'right':
                    this.rotateAnti--;
                    return this.direction = 'up'
                case 'up':
                    this.rotateAnti--;
                    return this.direction = 'left'
                case 'left':
                    this.rotateAnti--;
                    return this.direction = 'down'
                case 'down':
                    this.rotateAnti--;
                    return this.direction = 'right'
            }
        }
        console.log(this.rotateAnti);

    }

    drawSprite() {
        this.calculateDirection();
        //this.xStart = this.gridVertices[this.rowPosition][this.colPosition].x;
        //this.yStart = this.gridVertices[this.rowPosition][this.colPosition].y;
        if (this.direction == 'right') {

            this.ctx.drawImage(this.sRight, this.xPosition, this.yPosition, this.gridCellSize, this.gridCellSize);

        }
        else if (this.direction == 'down') {

            this.ctx.drawImage(this.sDown, this.xPosition, this.yPosition, this.gridCellSize, this.gridCellSize);

        }
        else if (this.direction == 'left') {

            this.ctx.drawImage(this.sLeft, this.xPosition, this.yPosition, this.gridCellSize, this.gridCellSize);

        }
        else if (this.direction == 'up') {

            this.ctx.drawImage(this.sUp, this.xPosition, this.yPosition, this.gridCellSize, this.gridCellSize);

        }
    }

    moveForward() {
        this.velocity = 60;

        switch (this.direction) {
            case 'right':
                if (this.xPosition < this.xTarget) {
                    this.xPosition += dx * easeIn;
                    if (Math.abs(dx) < 0.5) this.xPosition = this.xTarget;

                    console.log("ativou r");
                }
            case 'up':
                this.direction = 'left'
                this.rotateAnti--;
            case 'left':
                this.direction = 'down'
                this.rotateAnti--;
            case 'down':
                this.direction = 'right'
                this.rotateAnti--;
        }

    }

    jump() {

    }


    /*
    drawPlayer() {
        //console.log("oi testando");
        this.ctx.fillStyle = "#00aeffaa"
        this.ctx.beginPath();
        this.ctx.arc(this.xPosition, this.yPosition, 32, 0, 2 * Math.PI);
        this.ctx.fill();

        this.ctx.fillStyle = "#fe6";
        this.ctx.font = "12px Arial";
        this.ctx.textAlign = "center";
        this.ctx.fillText(`${Math.floor(this.xPosition)},${Math.floor(this.yPosition)}`, this.xPosition - 30, this.yPosition);
        this.ctx.fillText(`${Math.floor(this.rowPosition)},${Math.floor(this.colPosition)}`, this.xPosition + 30, this.yPosition);
    }
    */

    // associar cada imagem a uma direção


    update() {
        this.drawSprite();

    }
}

export default Player;

// get position
// spawn player
// controle de movimentos ?
