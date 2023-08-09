let personagem
let grama
let inimigo
let final
let morto

let tamanho = 64;
let andarX = 0;
let andarY = 0;

//executado uma vez quando o programa é executado
function setup() {
  createCanvas(576, 576);
  personagem = loadImage('mario.png');
  grama = loadImage('grass.png');
  inimigo = loadImage('copa.png');
  final = loadImage('cano.png');
  morto = loadImage('deadmario.png')
}
//fica executando em loop até o programa ser fechado
function draw() {
  background(220);
  
  if (andarX < 0){
    andarX = 0
  }
  if (andarY < 0){
    andarY = 0
  }
  
  if(andarX > tamanho*8){
    andarX = tamanho*8
  }
  
  if(andarY > tamanho*8){
    andarY = tamanho*8
  }
  
  
  for (let x = 0; x < 9; x++ ){
    for (let y = 0; y < 9; y++ ){
    image(grama, x*tamanho, y*tamanho, tamanho, tamanho );
  }
  }
  
  image(inimigo, 128, 192, tamanho, tamanho);
  image(inimigo, 384, 128, tamanho, tamanho);
  image(inimigo, 320, 384, tamanho, tamanho);  
  image(personagem, andarX, andarY, tamanho, tamanho);
  image(final, 512, 512, 80, 80); 
  
  text(`x:${andarX} y: ${andarY}`, 300, 300)
  
  if(andarX === tamanho*8 && andarY === tamanho*8){
     //criar um retangulo
    rect(160, 220, 256, 120)
    //escrever um texto que ganhou
    textSize(35)
    text('You Win', 220, 300)
    //criar um botão
    botao = createButton('Reiniciar')
    //resetar o jogo
    botao.mousePressed(reset)
    //parar o jogo
    noLoop()
  }
  if(andarX === 128 && andarY === 192){
     
    
    //criar um retangulo
    rect(160, 220, 256, 120)
    //escrever um texto que perdeu
    textSize(35)
    text('You Lose', 220, 300)
    //criar um botão
    botao = createButton('Reiniciar')
    //resetar o jogo
    botao.mousePressed(reset)
    //parar o jogo
    noLoop()
  }
  
  if(andarX === 384 && andarY === 128){
     //criar um retangulo
    rect(160, 220, 256, 120)
    //escrever um texto que perdeu
    textSize(35)
    text('You Lose', 220, 300)
    //criar um botão
    botao = createButton('Reiniciar')
    //resetar o jogo
    botao.mousePressed(reset)
    //parar o jogo
    noLoop()
  }
  if(andarX === 320 && andarY === 384){
     //criar um retangulo
    rect(160, 220, 256, 120)
    //escrever um texto que perdeu
    textSize(35)
    text('You Lose', 220, 300)
    //criar um botão
    botao = createButton('Reiniciar')
    //resetar o jogo
    botao.mousePressed(reset)
    //parar o jogo
    noLoop()
  }
  
  function reset() {
  andarX = 0
  andarY = 0
  botao.remove()
  loop()
}
}
//executado 1 vez toda a vez há um evento de teclado
//UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW
function keyPressed(){
  if(keyIsDown(UP_ARROW)){
    andarY -= 64
  }
  if(keyIsDown(DOWN_ARROW)){
    andarY += 64
  }
  if(keyIsDown(LEFT_ARROW)){
    andarX -= 64
  }
  if(keyIsDown(RIGHT_ARROW)){
    andarX += 64
  }
  
  
}