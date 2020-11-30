function validateInput(){
  let inputNumber = parseInt(this.value());
  
   if(!Number.isInteger(inputNumber)){
      this.value("");
   }
   
   if(inputNumber > 25){
     this.value("");
   }
}



function drawCardInputs(){
  noFill();
  stroke(255);
  strokeWeight(3);
  rect(150, 20, 220, 250);
  stroke(0);
  strokeWeight(1);
  //Primeira fileira
  number1Input = createInput('');
  number1Input.position(190, 100);
  number1Input.style("width", "25px");
  number1Input.style("height", "20px");
  number1Input.value(1);
  number1Input.input(validateInput);
  
  number2Input = createInput('');
  number2Input.position(230, 100);
  number2Input.style("width", "25px");
  number2Input.style("height", "20px");
  number2Input.value(8);
  number2Input.input(validateInput);
  
  number3Input = createInput('');
  number3Input.position(270, 100);
  number3Input.style("width", "25px");
  number3Input.style("height", "20px");
  number3Input.value(14);
  number3Input.input(validateInput);
  
  number4Input = createInput('');
  number4Input.position(310, 100);
  number4Input.style("width", "25px");
  number4Input.style("height", "20px");
  number4Input.value(23);
  number4Input.input(validateInput);
  
  //Segunda Fileira
  number5Input = createInput('');
  number5Input.position(190, 150);
  number5Input.style("width", "25px");
  number5Input.style("height", "20px");
  number5Input.value(2);
  number5Input.input(validateInput);
  
  number6Input = createInput('');
  number6Input.position(230, 150);
  number6Input.style("width", "25px");
  number6Input.style("height", "20px");
  number6Input.value(09);
  number6Input.input(validateInput);
  
  number7Input = createInput('');
  number7Input.position(270, 150);
  number7Input.style("width", "25px");
  number7Input.style("height", "20px");
  number7Input.value(15);
  number7Input.input(validateInput);
  
  number8Input = createInput('');
  number8Input.position(310, 150);
  number8Input.style("width", "25px");
  number8Input.style("height", "20px");
  number8Input.value(24);
  number7Input.input(validateInput);
  
  //Terceira Fileira
  number9Input = createInput('');
  number9Input.position(190, 200);
  number9Input.style("width", "25px");
  number9Input.style("height", "20px");
  number9Input.value(3);
  number9Input.input(validateInput);
  
  number10Input = createInput('');
  number10Input.position(230, 200);
  number10Input.style("width", "25px");
  number10Input.style("height", "20px");
  number10Input.value(11);
  number10Input.input(validateInput);
  
  number11Input = createInput('');
  number11Input.position(270, 200);
  number11Input.style("width", "25px");
  number11Input.style("height", "20px");
  number11Input.value(20);
  number11Input.input(validateInput);
  
  number12Input = createInput('');
  number12Input.position(310, 200);
  number12Input.style("width", "25px");
  number12Input.style("height", "20px");
  number12Input.value(25);
  number12Input.input(validateInput);
  
  //Quarta Fileira
  number13Input = createInput('');
  number13Input.position(190, 250);
  number13Input.style("width", "25px");
  number13Input.style("height", "20px"); 
  number13Input.value(7);
  number13Input.input(validateInput);
  
  number14Input = createInput('');
  number14Input.position(230, 250);
  number14Input.style("width", "25px");
  number14Input.style("height", "20px");
  number14Input.value(12);
  number14Input.input(validateInput);
  
  number15Input = createInput('');
  number15Input.position(270, 250);
  number15Input.style("width", "25px");
  number15Input.style("height", "20px");
  number15Input.value(22);
  number15Input.input(validateInput);
  
  textSize(16);
  fill(255);
  text("Minha Cartela", 210, 252);
}

function drawButtons(){
 
  //Buttons Jogar/Auto
  buttonPlay = createButton('JOGAR');
  buttonPlay.position(110, 350);
  buttonPlay.style("width", "140px");
  buttonPlay.style("height", "50px");
  buttonPlay.style("background-color", "green");
  buttonPlay.style("color", "white");
  buttonPlay.mousePressed(play);
  
 
  buttonAutoPlay = createButton('Auto');
  buttonAutoPlay.position(270, 350);
  buttonAutoPlay.style("width", "140px");
  buttonAutoPlay.style("height", "50px");
  buttonAutoPlay.style("background-color", "blue");
  buttonAutoPlay.style("color", "white");
  buttonAutoPlay.mousePressed(autoPlay);
}



function gerarCartelas(quantCartelas, quantNumerosSortidosPorCartela){
    var sorteio = [];
    
    //Cria as cartelas com a quantidade de numeros solicitada.
    for(var iteracoes = 0; iteracoes < quantCartelas; iteracoes++){
        for(var i = 0; i < quantNumerosSortidosPorCartela; i++){
          sorteio.push(floor(random(1, 26)));
        }
    }
    //O random deve ir de 1 - 26, por que ele vai ignorar o ultimo digito no caso o (26).
    
    
    //Limpa os numeros repetidos das cartelas.
    var repetir = false;
    
    do{
        for(var x = 0; x < sorteio.length; x++){
                repetir = false;
                 for(var c = 0; c < sorteio.length; c++){
                     if(sorteio[x] === sorteio[c] && x !== c){
                          sorteio.splice(x, 1);
                          var novoValor = floor(random(1, 26));
                          sorteio.push(novoValor);
                          repetir = true;
                          x = sorteio.length;
                          break;
                     }
              }
        }
       
    }while(repetir);
    
    //Para ordenar os numeros dentro da cartela.
     sorteio.sort(function(a, b) {
          return a - b;
    });
    
    return sorteio;
}

function atualizarMinhaCartela(){
    minhaCartela = [
      parseInt(number1Input.value()), parseInt(number2Input.value()), parseInt(number3Input.value()), parseInt(number4Input.value()), parseInt(number5Input.value()), 
      parseInt(number6Input.value()), parseInt(number7Input.value()), parseInt(number8Input.value()), parseInt(number9Input.value()), parseInt(number10Input.value()), 
      parseInt(number11Input.value()), parseInt(number12Input.value()), parseInt(number13Input.value()), parseInt(number14Input.value()), parseInt(number15Input.value())
    ];
}

 



var number1Input;
var number2Input;
var number3Input;
var number4Input;
var number5Input;
var number6Input;
var number7Input;
var number8Input;
var number9Input;
var number10Input;
var number11Input;
var number12Input;
var number13Input;
var number14Input;
var number15Input;
var buttonPlay;
var buttonAutoPlay;


var minhaCartela = [];

var acertoNumeros = 0;
var valorFaturado = 0;
var valorAposta = 2.00;
var valorInvestido = 0;
var acertoJogos = 0;
var quantJogadas = 0;
var mediaAcertos = 0;
var velocidadeDoJogo = 1;
var toggle = false;
var autoPlaying = false;
var playing = true;
function setup() {
  createCanvas(windowWidth, 400); 
  frameRate(velocidadeDoJogo);
  background(51);  
  drawCardInputs();
  drawButtons();
  atualizarMinhaCartela();  
}

function draw() {  
   atualizarMinhaCartela();    
  
  if(autoPlaying){
     jogar(); 
  }  
}




function jogar(){     
     background(51);
     quantJogadas++;
    
    var cartelaPremiada = gerarCartelas(1, 15);
    
    for(var i = 0; i < minhaCartela.length; i++){
        for(var x = 0; x < cartelaPremiada.length; x++){
            if(minhaCartela[i] === cartelaPremiada[x]){
                acertoNumeros++; 
            }
        }
    }
    
    switch(acertoNumeros){
        case 15:
            valorFaturado += 746232.56;
            acertoJogos++;
            break;
        case 14:
            valorFaturado += 1813.32;
            acertoJogos++;
            break;
        case 13:
            valorFaturado += 20.00;
            acertoJogos++;
            break;
        case 12:
            valorFaturado += 8.00;
            acertoJogos++;
            break;
        case 11:
            valorFaturado += 4.00;
            acertoJogos++;
            break;
    }
      
      
      mediaAcertos = acertoJogos/quantJogadas;
      valorInvestido = valorAposta * quantJogadas;
      
       
      textSize(16);    
      fill(255);
      text("Valor Faturado: R$ "+valorFaturado.toFixed(2), 500, 30);
      text("Qtd Apostas Ganhadoras: "+acertoJogos, 500, 51);
      text("Qtd Apostas Feitas: "+quantJogadas, 500, 72);
      text("Média de Apostas Ganhadoras: "+mediaAcertos.toFixed(2), 800, 52 );
      text("Valor investido: R$ "+valorInvestido.toFixed(2), 800, 72);
      
      
       
       
       fill(255, 255, 0);
       var  posicaoXx = 700, posicaoYy = 129;
       for(x = 0; x < cartelaPremiada.length; x++){
           if(cartelaPremiada[x] < 10){
              text("0"+cartelaPremiada[x], posicaoXx, posicaoYy);
           }else{
            text(cartelaPremiada[x], posicaoXx, posicaoYy);
           }
           
           if(posicaoYy < height - 198){ 
            posicaoYy+=33;
           }else if(posicaoXx < width - 20){
              posicaoYy = 129;
              posicaoXx += 39;
           }
       }
       
       
       noFill();
       stroke(255);
       strokeWeight(3);
       rect(150, 20, 220, 250);
       stroke(0);
       strokeWeight(1);
       fill(255);
       text("Minha Cartela", 210, 252);
       
       noFill();
       stroke(255, 255, 0);
       strokeWeight(3);
       rect(640, 100, 250, 280);
       stroke(0);
       strokeWeight(1);
       fill(255, 255, 0);
       text("Cartela Premiada", 700, 260);
       
       textSize(20);
       text("Acertos nessa cartela",  670, 321);
       textSize(40);
       text(acertoNumeros,  750, 370);
       
       acertoNumeros = 0;
      
 }

function autoPlay(){
    if(!autoPlaying){
      autoPlaying = false;
    }else{
       autoPlaying = true;
    }
    autoPlaying = !autoPlaying;
}

function play(){
   jogar();
   autoPlaying = false;
}
