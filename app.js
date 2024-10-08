// let titulo = document.querySelector("h1");
// titulo.innerHTML = "Jogo do numero secreto";

// let paragrafo = document.querySelector("p");
// paragrafo.innerHTML = "escolha um numero entre 1 e 10";

//para não deixar repetições criar função e minimizar codigo
//abaixo exemplo de função com parametro:

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;



function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});// como colocamos script no head
}
//conseguimos chamar ele
//<script src="https://code.responsivevoice.org/responsivevoice.js"></script> <=== script para audio por no head
//criamos uma função de mensagem para quando alterar o texto não precisar mecher em varias partes do codigo
//assim eliminamos repetições de codigo
function exibirMensagemInicial(){
    exibirTextoNaTela("h1", "Jogo do numero secreto");
    exibirTextoNaTela("p", "Escolha um numero de 1 a 10");
}


exibirMensagemInicial();

function verificarChute() {
  //função é responsavel por determinar alguma ação dentro do codigo 1 responsabilidade
  //neste caso ao clicar no botão gera um numero secreto se clicar novamente vai mostrar o mesmo numero
  //só ira mudar caso atualizar pagina
  let chute = document.querySelector("input").value; //para pegar o valor colocado dentro do input
  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou");
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativas';
    let mensagemTentativas = `Parabens você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`; 
    exibirTextoNaTela("p", mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');//para remover o disabled do botão
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("h1", "Errou");
      exibirTextoNaTela("p", "O numero secreto é menor tente novamente");
    }else{
        exibirTextoNaTela("h1","Errou");
        exibirTextoNaTela("p","O numero secreto é maior tente novamente");
    }
    tentativas++;
    limparCampo();
  }
}
//para conseguir alocar o numero e receber retorno para atribuir a variavel usar return
function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);//trocamos valor de numero por uma var
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if(quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumerosSorteados = [];
  }

  if(listaDeNumerosSorteados.includes(numeroEscolhido)){//verifica se elemento já esteve na lista
    return gerarNumeroAleatorio();// vai pedir para gerar um novo numero caso já estiver sido gerado
  }else{
    listaDeNumerosSorteados.push(numeroEscolhido);// estamos falando para colocar na lista o numero escolhido
    console.log (listaDeNumerosSorteados)//sempre antes do return pois ele quebra execução
    return numeroEscolhido;//caso não tenha sido sorteado returnar ao numero gerado
    
  } 
}
//função para resetar input e não ficar o valor de chute sempre resetar o campo
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true); //reiniciar o jogo e desabilitar botao
}

// desafio 2

// function exibirOla() {
//     console.log("Olá, mundo!");
//   }

//   exibirOla();

// function exibirNome(){
//     let novoNome = prompt('digite seu nome');
//     alert(`ola ${novoNome}`);
// }

// function exibirNome(){
//     var numeroEscolhido = prompt('Escolha um numero');
//     // operações matematicas tem que ser dentro dos colchetes se não gera como string
//     alert(`${numeroEscolhido * 2}`);
// }

// function calcularDobro(numero) {
//     return numero * 2;
//   }

//   let resultadoDobro = calcularDobro(5);
//   console.log(resultadoDobro);

// function calcularMedia(a,b,c){
//     return (a+b+c) /3;
// }

// let media = calcularMedia(5,8,9);
// console.log(media);

// function encontrarMaior(a, b) {
//     return a > b ? a : b; // ternario
//   }

//   let maiorNumero = encontrarMaior(15, 9);
//   console.log(maiorNumero);

// function quadrado(numero) {
//     return numero * numero;
//   }

//   let resultado = quadrado(2);
//   console.log(resultado);

//desafio

// function desafio(){
//     // console.log('o botao foi clicado');
//     // alert("Eu amo js");
//     // let cidade = prompt("Fale o nome de uma cidade"); neste caso a variavel tem que estão dentro da função
//     // alert(`Estive em ${cidade} e lembrei de você`); caso contrario ela não vai funcionar e dará erro
//    let primeiroNumero = parseInt(prompt('digite 1 numero'));
//    let segundoNumero = parseInt(prompt('digite 2 numero'));
//    // neste caso mostra somente resultado da soma
//    let resultado = primeiroNumero + segundoNumero;
// //    alert(resultado); neste caso vai mostrar o 1 numero + 2 numero = resultado
//     alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`)
// }


// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro:
// function calculaIMC(altura, peso){

//   let imc = peso / (alturaMetros * alturaMetros);
// }
// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
// function calcularFatorial(numero) {
//   if (numero === 0 || numero === 1) {
//     return 1;
//   }

//   let fatorial = 1;
//   for (let i = 2; i <= numero; i++) {
//     fatorial *= i;
//   }

//   return fatorial;
// }

// // Exemplo de uso
// let numero = 5;
// let resultado = calcularFatorial(numero);
// console.log(`O fatorial de ${numero} é ${resultado}`);
// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$ 4,80.
// function converterDolarParaReal(valorEmDolar) {
//   let cotacaoDolar = 4.80;
//   let valorEmReais = valorEmDolar * cotacaoDolar;
//   return valorEmReais.toFixed(2);
// }

// // Exemplo de uso
// let valorEmDolar = 50;
// let valorEmReais = converterDolarParaReal(valorEmDolar);
// console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);
// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
// function calcularAreaPerimetroSalaRetangular(altura, largura) {
//   let area = altura * largura;
//   let perimetro = 2 * (altura + largura);
  
//   console.log(`Área da sala: ${area} metros quadrados`);
//   console.log(`Perímetro da sala: ${perimetro} metros`);
// }

// // Exemplo de uso
// let altura = 3; // em metros
// let largura = 5; // em metros
// calcularAreaPerimetroSalaRetangular(altura, largura);
// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
// function calcularAreaPerimetroSalaCircular(raio) {
//   let area = Math.PI * raio * raio;
//   let perimetro = 2 * Math.PI * raio;
  
//   console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
//   console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
// }

// // Exemplo de uso
// let raio = 4; // em metros
// calcularAreaPerimetroSalaCircular(raio);
// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
// function mostrarTabuada(numero) {
//   for (let i = 1; i <= 10; i++) {
//     let resultado = numero * i;
//     console.log(`${numero} x ${i} = ${resultado}`);
//   }
// }

// // Exemplo de uso
// let numero = 7;
// mostrarTabuada(numero);