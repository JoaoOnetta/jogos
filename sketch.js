//variaveis
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2 ;
//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raqueteComprimento = 10;
let raqueteAltura = 90;
//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
//variaveis do oponente
let xRaqueteoponente = 585;
let yRaqueteoponente = 150;
let velocidadeyoponente;

let colidiu = false;

//placar do jogo
let meuspontos = 0;
let pontosDooponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete();
  movimentaMinhaRaquete();
  //verificacolisaoraquete();
  verificacolisaoraquete(xRaquete, yRaquete);
  movimentaRaqueoponente
  
  
  
  
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raio> width ||
     xBolinha - raio< 0){
   velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio> height ||
     yBolinha - raio< 0){
    velocidadeYBolinha *= -1;
  }
}
function mostraRaquete(){
  rect(xRaquete, yRaquete, raqueteComprimento,
      raqueteAltura);
}
function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown( DOWN_ARROW)){
    yRaquete += 10;
  }
}
function verificacolisaoRaquete(){
  if(xBolinha -raio < xRaquete + raquetecomprimento && yBolinha -raio < yRaquete + raquetealtura && yBolinha + raio > yRaquete){
    
    velocidadexBolinha *= -1;
  }
}
function verificacolisaoraquete(x, y){
  colidiu=
  collideRectCircle(x, y, raquetecomprimento,raquetealtura, xbolinha, yBolinha, raio);
  if (colidiu){
    velocidadexBolinha*=-1;
   }
  
}

function movimentaRaqueteoponente(){
  velocidadeyoponente = 
  
}











