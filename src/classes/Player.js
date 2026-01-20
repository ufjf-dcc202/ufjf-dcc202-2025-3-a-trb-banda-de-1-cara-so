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


        this.startPosition = gridVertices;
        this.rowPosition = 0;
        this.colPosition = 0;
        this.xStartPosition = this.startPosition[this.rowPosition][this.colPosition].x;
        this.yStartPosition = this.startPosition[this.rowPosition][this.colPosition].y;
        this.xTarget = this.xStartPosition;
        this.yTarget = this.yStartPosition;
        this.gridCellSize = this.gridVertices[0][1].x - this.gridVertices[0][0].x;

        this.direction = 'right';
        this.rotateClock = 0;
        this.rotateAnti = 0;
        this.moves = 0;
        this.jumps = 0;

        this.setSprites();
    }

    setSprites() {
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

    }

    drawSprite() {
        this.calculateDirection();

        if (this.direction == 'right') {

            this.ctx.drawImage(this.sRight, this.xStartPosition, this.yStartPosition, this.gridCellSize, this.gridCellSize);

        }
        else if (this.direction == 'down') {

            this.ctx.drawImage(this.sDown, this.xStartPosition, this.yStartPosition, this.gridCellSize, this.gridCellSize);

        }
        else if (this.direction == 'left') {

            this.ctx.drawImage(this.sLeft, this.xStartPosition, this.yStartPosition, this.gridCellSize, this.gridCellSize);

        }
        else if (this.direction == 'up') {

            this.ctx.drawImage(this.sUp, this.xStartPosition, this.yStartPosition, this.gridCellSize, this.gridCellSize);

        }

    }

    moveWhere() {
        // verifica se tem movimento pra fazer e se pode fazer 
        if (this.moves > 0) {
            switch (this.direction) {
                case 'right':
                    if (this.colPosition < this.finalCol) { this.colPosition++; }
                    this.xTarget = this.startPosition[this.rowPosition][this.colPosition].x;
                    console.log("ativou right move");

                    this.moves--;
                    return
                case 'up':
                    if (this.rowPosition > 0) { this.rowPosition--; }
                    this.yTarget = this.startPosition[this.rowPosition][this.colPosition].y;
                    console.log("ativou up move");

                    this.moves--;
                    return
                case 'left':
                    if (this.colPosition > 0) { this.colPosition--; }
                    this.xTarget = this.startPosition[this.rowPosition][this.colPosition].x;
                    console.log("ativou left move");

                    this.moves--;
                    return
                case 'down':
                    if (this.rowPosition < this.finalRow) { this.rowPosition++; }
                    this.yTarget = this.startPosition[this.rowPosition][this.colPosition].y;
                    console.log("ativou down move");

                    this.moves--;
                    return
            }
        }
    }

    jump() {
        if (this.jumps > 0) {
            switch (this.direction) {
                case 'right':
                    if (this.colPosition < this.finalCol - 1) { this.colPosition += 2; }
                    this.xTarget = this.startPosition[this.rowPosition][this.colPosition].x;
                    console.log("ativou right move");

                    this.jumps--;
                    return
                case 'up':
                    if (this.rowPosition > 1) { this.rowPosition -= 2; }
                    this.yTarget = this.startPosition[this.rowPosition][this.colPosition].y;
                    console.log("ativou up move");

                    this.jumps--;
                    return
                case 'left':
                    if (this.colPosition > 1) { this.colPosition -= 2; }
                    this.xTarget = this.startPosition[this.rowPosition][this.colPosition].x;
                    console.log("ativou left move");

                    this.jumps--;
                    return
                case 'down':
                    if (this.rowPosition < this.finalRow - 1) { this.rowPosition += 2; }
                    this.yTarget = this.startPosition[this.rowPosition][this.colPosition].y;
                    console.log("ativou down move");

                    this.jumps--;
                    return
            }
        }
    }

    moveForward() {
        this.moveWhere();
        this.jump();
        //this.velocity = 40;
        const dx = this.xTarget - this.xStartPosition;
        const dy = this.yTarget - this.yStartPosition;
        const easeIn = 0.08;
        if (this.xStartPosition < this.xTarget) {
            this.xStartPosition += dx * easeIn;
            if (Math.abs(dx) < 0.5) this.xStartPosition = this.xTarget;

            console.log("ativou r");
        }
        if (this.xStartPosition > this.xTarget) {
            this.xStartPosition += dx * easeIn;
            if (Math.abs(dx) < 0.5) this.xStartPosition = this.xTarget;

            console.log("ativou l");
        }
        if (this.yStartPosition > this.yTarget) {
            this.yStartPosition += dy * easeIn;
            if (Math.abs(dy) < 0.5) this.yStartPosition = this.yTarget;

            console.log("ativou u");
        }
        if (this.yStartPosition < this.yTarget) {
            this.yStartPosition += dy * easeIn;
            if (Math.abs(dy) < 0.5) this.yStartPosition = this.yTarget;

            console.log("ativou d");
        }
    }

    update() {
        this.drawSprite();
        this.moveForward();
    }
}

export default Player;
