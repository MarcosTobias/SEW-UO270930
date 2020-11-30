class Canvas {
    constructor() { }

    init(first) {
        this.canvas = document.getElementById("can");
        this.context = this.canvas.getContext("2d");
        this.p1Height = 100;
        this.p1Width = 12;
        this.p2Height = this.p1Height;
        this.p2Width = this.p1Width;
        this.p1Y = (this.canvas.height - this.p1Height) / 2;
        this.p2Y = (this.canvas.height - this.p2Height) / 2;
        this.p1X = this.p1Width;
        this.p2X = this.canvas.width - this.p2Width;
        this.x = this.canvas.width / 2;
        this.y = this.canvas.height / 2;
        this.ballR = 10;
        this.dy = -2;
        this.dx = 2;
        this.wPressed = false;
        this.sPressed = false;
        this.upPressed = false;
        this.downPressed = false;
        this.haciaJugador2 = true;
        this.spacePressed = false;
        this.gameEnded = false;
        this.score1 = 0;
        this.score2 = 0;
        this.firstGame = first;
        this.frequency = setInterval(this.draw.bind(this), 70);

        document.addEventListener("keydown", this.down.bind(this), false);
        document.addEventListener("keyup", this.up.bind(this), false);
        this.buttonUp = document.getElementById("buttonUp");
        this.buttonDown = document.getElementById("buttonDown");
        this.buttonUp.addEventListener("touchstart", this.touchUp.bind(this), false);
        this.buttonUp.addEventListener("touchend", this.touchUpEnd.bind(this), false);
        this.buttonUp.addEventListener("touchcancel", this.touchUpEnd.bind(this), false);
        this.buttonDown.addEventListener("touchstart", this.touchDown.bind(this), false);
        this.buttonDown.addEventListener("touchend", this.touchDownEnd.bind(this), false);
        this.buttonDown.addEventListener("touchcancel", this.touchDownEnd.bind(this), false);
        this.canvas.addEventListener("touchstart", this.spaceY.bind(this), false);
        this.canvas.addEventListener("touchend", this.spaceN.bind(this), false);
    }

    spaceN() {
        this.spacePressed = false;
    }

    spaceY() {
        this.spacePressed = true;
    }

    touchUp() {
        this.wPressed = true;
    }

    touchUpEnd() {
        this.wPressed = false;
    }

    touchDown() {
        this.sPressed = true;
    }

    touchDownEnd() {
        this.sPressed = false;
    }

    up(event) {
        switch (event.key) {
            case "W":
            case "w":
                this.wPressed = false;
                break;
            case "S":
            case "s":
                this.sPressed = false;
                break;
            case "ArrowUp":
                this.upPressed = false;
                break;
            case "ArrowDown":
                this.downPressed = false;
                break;
            case " ":
                this.spacePressed = false;
        }
    }

    down(event) {
        switch (event.key) {
            case "W":
            case "w":
                this.wPressed = true;
                break;
            case "S":
            case "s":
                this.sPressed = true;
                break;
            case "ArrowUp":
                this.upPressed = true;
                break;
            case "ArrowDown":
                this.downPressed = true;
                break;
            case " ":
                this.spacePressed = true;
                break;
        }
    }

    drawCircle() {
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.ballR, 0, Math.PI * 2);
        this.context.fillStyle = "#eee";
        this.context.fill();
        this.context.closePath();
    }

    drawPlayers() {
        this.context.beginPath();
        this.context.rect(0, this.p1Y, this.p1Width, this.p1Height);
        this.context.fillStyle = "#eee";
        this.context.fill();
        this.context.closePath();

        this.context.beginPath();
        this.context.rect(this.canvas.width - this.p2Width, this.p2Y, this.p2Width, this.p2Height);
        this.context.fillStyle = "#eee";
        this.context.fill();
        this.context.closePath();
    }

    pulsaParaContinuar() {
        this.context.fillStyle = "#eee";
        this.context.font = "40px Arial";
        this.context.fillText("Pulsa espacio para continuar", (this.canvas.width / 2) - 255, this.canvas.height / 2);
    }

    borrarPulsaParaContinuar() {
        this.context.clearRect((this.canvas.width / 2) - 250, 0, this.canvas.height / 2, this.canvas.width);
    }

    drawScores() {
        this.context.font = "30px Arial";
        this.context.fillStyle = "#eee";
        this.context.fillText(this.score1, (this.canvas.width / 10) * 4, 60);
        this.context.fillText(this.score2, (this.canvas.width / 10) * 5.8, 60);
    }

    reset() {
        var aux;
        if (this.haciaJugador2) {
            aux = 2;
        } else {
            aux = -2;
        }

        var score1Copy = this.score1;
        var score2Copy = this.score2;
        this.borrarPulsaParaContinuar();
        clearInterval(this.frequency);
        this.init();
        this.dx = aux;
        this.score1 = score1Copy;
        this.score2 = score2Copy;
        this.firstGame = false;
    }

    drawMiddleLine() {
        for (var i = 0; i < this.canvas.width / 10; i++) {
            if (i % 2 == 0) {
                continue;
            }
            this.context.beginPath();
            this.context.rect((this.canvas.width / 2) - 5, i * 10, 10, 10);
            this.context.fillStyle = "#eee";
            this.context.fill();
            this.context.closePath();
        }
    }

    draw() {
        if (this.gameEnded && !this.spacePressed) {
            return;
        } else if (this.gameEnded && this.spacePressed) {
            this.reset();
        }

        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawCircle();
        this.drawPlayers();
        this.drawScores();
        this.drawMiddleLine();

        if (this.x + this.dx > this.canvas.width - this.ballR) {
            if (this.checkCollision(this.p2X, this.p2Y, this.p2Width, this.p2Height)) {
                this.dx = -this.dx;
            } else {
                this.haciaJugador2 = false;
                this.score1 += 1;
                this.context.clearRect(50, 0, (this.canvas.width / 2) - 70, 70);
                this.drawScores();
                this.pulsaParaContinuar();
                this.gameEnded = true;
            }
        } else if (this.x + this.dx < this.ballR) {
            if (this.checkCollision(this.p1X, this.p1Y, this.p1Width, this.p1Height)) {
                this.dx = -this.dx;
            } else {
                this.haciaJugador2 = true;
                this.score2 += 1;
                this.context.clearRect((this.canvas.width / 2) + 15, 0, (this.canvas.width / 2) - 60, 70);
                this.drawScores();
                this.pulsaParaContinuar();
                this.gameEnded = true;
            }
        }

        if (this.y + this.dy < this.ballR || this.y + this.dy > this.canvas.height - this.ballR) {
            this.dy = -this.dy;
        }

        if (this.wPressed) {
            this.p1Y -= 3;
            if (this.p1Y < 0) {
                this.p1Y = 0;
            }
        } else if (this.sPressed) {
            this.p1Y += 3;
            if (this.p1Y + this.p1Height > this.canvas.height) {
                this.p1Y = this.canvas.height - this.p1Height;
            }
        }

        if (this.upPressed) {
            this.p2Y -= 3;
            if (this.p2Y < 0) {
                this.p2Y = 0;
            }
        } else if (this.downPressed) {
            this.p2Y += 3;
            if (this.p2Y + this.p2Height > this.canvas.height) {
                this.p2Y = this.canvas.height - this.p2Height;
            }
        }

        if (this.firstGame) {
            this.pulsaParaContinuar();
            this.gameEnded = true;
            return;
        }

        this.x += this.dx;
        this.y += this.dy;
    }


    clamp(val, min, max) {
        return Math.max(min, Math.min(max, val))
    }


    checkCollision(playerX, playerY, playerWidth, playerHeight) {
        var closestX = this.clamp(this.x, playerX, playerX + playerWidth);
        var closestY = this.clamp(this.y, playerY, playerY + playerHeight);

        var distanceX = this.x - closestX;
        var distanceY = this.y - closestY;

        var distanceSquared = (distanceX * distanceX) + (distanceY * distanceY);
        return distanceSquared < (this.ballR * this.ballR);
    }

    leerArchivoAudio(files) {
        if (window.webkitAudioContext) {
            this.audioCtx = new window.webkitAudioContext();
        } else {
            this.audioCtx = new window.AudioContext();
        }

        var fileReader = new FileReader;
        fileReader.onload = (e) => {
            this.initSound(e.target.result);
        };
        fileReader.readAsArrayBuffer(files[0]);

        document.getElementById("archivoAudio").blur();
        document.getElementById("can").focus();
    }

    initSound(audioFile) {
        this.audioCtx.decodeAudioData(audioFile, (buffer) => {
            this.audioBuffer = buffer;
        })
    }

    start() {
        this.stop();
        this.source = this.audioCtx.createBufferSource();
        this.source.buffer = this.audioBuffer;
        this.source.loop = true;
        this.source.connect(this.audioCtx.destination);
        this.source.start(0);
    }

    stop() {
        if(this.source) {
            this.source.stop();
        }
    }
}

var canvas = new Canvas();