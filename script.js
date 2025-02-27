let xCircle = 300;
let yCircle = 200;
let velocidadeBolinha = 10;
let velocidadeBolinhaY = 10;
let raio = 20;
let diametro = 2 * raio;

let xRaquete = 10;
let yRaquete = 150;
let comprimentoRaquete = 10;
let larguraRaquete = 100;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    criarBolinha();
    moverBolinha();
    verificarLimiteBolinha();
    criarRaquete();
    moverRaquete();
    verificarLimiteRaquete();
}

function criarBolinha() {
    circle(xCircle, yCircle, diametro);
}

function moverBolinha() {
    xCircle += velocidadeBolinha;
    yCircle += velocidadeBolinhaY;
}

function verificarLimiteBolinha() {
    if (xCircle + raio > width || xCircle - raio < 0) {
        velocidadeBolinha *= -1;
    }
    if (yCircle + raio > height || yCircle - raio < 0) {
        velocidadeBolinhaY *= -1;
    }
}

function criarRaquete() {
    rect(xRaquete, yRaquete, comprimentoRaquete, larguraRaquete);
}

function moverRaquete() {
    if (keyIsDown(UP_ARROW)) {
        yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 10;
    }
}

function verificarLimiteRaquete() {
    if (
        xCircle - raio < xRaquete + comprimentoRaquete &&
        yCircle - raio < yRaquete + larguraRaquete &&
        yCircle + raio > yRaquete
    ) {
        velocidadeBolinha *= -1;
    }
}
