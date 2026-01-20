class Player {
    constructor(gridPoints, gridLimits) {
        this.gridPoints = gridPoints;
        this.gridLimits = gridLimits;
        this.finalRow = this.gridPoints.length - 1;
        this.finalCol = this.gridPoints[0].length - 1;
        this.xLimit = this.gridPoints[0][this.finalCol].x;
        this.yLimit = this.gridPoints[this.finalRow][0].y;

        console.log(this.gridPoints);
        console.log(this.gridLimits);

        console.log("alo3");

        console.log(this.finalRow);
        console.log(this.finalCol);

        this.position = gridPoints;
        this.rowPosition = 0;
        this.colPosition = 0;
        this.xPosition = this.position[this.rowPosition][this.colPosition].x;
        this.yPosition = this.position[this.rowPosition][this.colPosition].y;
        this.xTarget = this.xPosition;
        this.yTarget = this.yPosition;

        this.isMoving = false;

    }

    drawPlayer(ctx) {
        //console.log("oi testando");
        ctx.fillStyle = "#00aeffaa"
        ctx.beginPath();
        ctx.arc(this.xPosition, this.yPosition, 32, 0, 2 * Math.PI);
        ctx.fill();

        ctx.fillStyle = "#fe6";
        ctx.font = "12px Arial";
        ctx.textAlign = "center";
        ctx.fillText(`${Math.floor(this.xPosition)},${Math.floor(this.yPosition)}`, this.xPosition - 30, this.yPosition);
        ctx.fillText(`${Math.floor(this.rowPosition)},${Math.floor(this.colPosition)}`, this.xPosition + 30, this.yPosition);
    }

    moveRight() {
        this.velocity = 60;
        if (this.xPosition < this.xLimit) {
            this.colPosition++;
            this.xTarget = this.gridPoints[this.rowPosition][this.colPosition].x;
            this.isMoving = true;
            console.log("ativou");

        } else {
            console.log("nao ativou")
        }
    }
    moveLeft() {
        if (this.xPosition > this.gridLimits[1][1].x) {
            this.colPosition--;
            this.xTarget = this.gridPoints[this.rowPosition][this.colPosition].x;
            this.isMoving = true;
            console.log("ativou");

        } else {
            console.log("nao ativou")
        }
    }
    moveUp() {
        if (this.yPosition > this.gridLimits[1][1].y) {
            this.rowPosition--;
            this.yTarget = this.gridPoints[this.rowPosition][this.colPosition].y;
            this.isMoving = true;
            console.log("ativou");

        } else {
            console.log("nao ativou")
        }
    }
    moveDown() {
        if (this.yPosition < this.yLimit) {
            this.rowPosition++;
            this.yTarget = this.gridPoints[this.rowPosition][this.colPosition].y;
            this.isMoving = true;
            console.log("ativou");

        } else {
            console.log("nao ativou")
        }
    }

    update() {
        //movimento
        const dx = this.xTarget - this.xPosition;
        const dy = this.yTarget - this.yPosition;
        const easeIn = 0.2;

        if (this.xPosition < this.xTarget) {
            this.xPosition += dx * easeIn;
            if (Math.abs(dx) < 0.5) this.xPosition = this.xTarget;

            console.log("ativou r");
        }
        if (this.xPosition > this.xTarget) {
            this.xPosition += dx * easeIn;
            if (Math.abs(dx) < 0.5) this.xPosition = this.xTarget;

            console.log("ativou l");
        }
        if (this.yPosition > this.yTarget) {
            this.yPosition += dy * easeIn;
            if (Math.abs(dy) < 0.5) this.yPosition = this.yTarget;

            console.log("ativou u");
        }
        if (this.yPosition < this.yTarget) {
            this.yPosition += dy * easeIn;
            if (Math.abs(dy) < 0.5) this.yPosition = this.yTarget;

            console.log("ativou d");
        }


    }
}

export default Player;

// get position
// spawn player
// controle de movimentos ?
