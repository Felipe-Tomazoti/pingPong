let xCircle = 300;
let yCircle = 200;
let velocidadeBolinha = 5;
let velocidadeBolinhaY = 5;
let raio = 20;
let diametro = 2 * raio;

let xRaquete = 10;
let yRaquete = 150;
let comprimentoRaquete = 10;
let larguraRaquete = 100;

let xRaqueteInimigo = 580;
let yRaqueteInimigo = 150;
let larguraRaqueteInimigo = 10;

let golsCasa = 0; 
let golsVisitante = 0; 

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
    criarRaqueteInimigo();
    moverRaqueteInimigo();
    verificarLimiteRaqueteInimigo(); 
    mostrarPlacar();  
}

function criarBolinha() {
    circle(xCircle, yCircle, diametro);
}

function moverBolinha() {
    xCircle += velocidadeBolinha;
    yCircle += velocidadeBolinhaY;
}

function verificarLimiteBolinha() {
    if (xCircle + raio > width) {
        xCircle = width - raio;  
        velocidadeBolinha *= -1;  
        golsCasa += 1;  
    } else if (xCircle - raio < 0) {
        xCircle = raio;  
        velocidadeBolinha *= -1; 
        golsVisitante += 1; 
    }

    if (yCircle + raio > height) {
        yCircle = height - raio;  
        velocidadeBolinhaY *= -1;  
    } else if (yCircle - raio < 0) {
        yCircle = raio;  
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
        yCircle > yRaquete && 
        yCircle < yRaquete + larguraRaquete
    ) {
        velocidadeBolinha *= -1; 
        let dist = (yCircle - (yRaquete + larguraRaquete / 2)) / (larguraRaquete / 2);  
        velocidadeBolinhaY = dist * 5; 
    }
}

function criarRaqueteInimigo() {
    rect(xRaqueteInimigo, yRaqueteInimigo, larguraRaqueteInimigo, larguraRaquete);
}

function moverRaqueteInimigo() {
    if (yRaqueteInimigo + larguraRaquete / 2 < yCircle) {
        yRaqueteInimigo += 3;
    } else if (yRaqueteInimigo + larguraRaquete / 2 > yCircle) {
        yRaqueteInimigo -= 3;
    }
}

function verificarLimiteRaqueteInimigo() {
    if (
        xCircle + raio > xRaqueteInimigo &&
        yCircle > yRaqueteInimigo && 
        yCircle < yRaqueteInimigo + larguraRaquete
    ) {
        velocidadeBolinha *= -1;  
        let dist = (yCircle - (yRaqueteInimigo + larguraRaquete / 2)) / (larguraRaquete / 2);  
        velocidadeBolinhaY = dist * 5;  
    }
}

function mostrarPlacar() {
    fill(255);
    textSize(32);
    textAlign(CENTER, TOP);
    text('Casa: ' + golsCasa + '  X  Visitante: ' + golsVisitante, width / 2, 20);
}
