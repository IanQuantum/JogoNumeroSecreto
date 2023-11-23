let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumero();
let tentativas = 1;

function exibirTexto(tag, texto){
    let campo  = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirInicio(){
    exibirTexto('h1','Jogo do Número Secreto' );
    exibirTexto('p', 'Digite um número entre 1 e 100');
}

exibirInicio();

function verificarChute(){
        let chute = document.querySelector('input').value;
        console.log(chute == numeroSecreto);
        console.log(numeroSecreto);

        if (chute == numeroSecreto){
            let  palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; 
            let mensagemTentativas = `Voce descobriu o Numero secreto em ${tentativas} ${palavraTentativa}`;
            exibirTexto('h1', 'Acertou!');
            exibirTexto('p', mensagemTentativas);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }else{
            if(chute > numeroSecreto){
                exibirTexto('p', 'O número Secreto é menor');
            }else{
                exibirTexto('p', 'O número Secreto é maior');
            }
            tentativas++;
            limparCampo();
        }

}

//Adicionando novos elementos. Para adicionar um elemento ao final da array, você pode usar o método push.
//Removendo o último elemento. Para remover o último elemento, você pode usar o método pop.
// Ver ultimo elemento lista[lista.length -1]

function gerarNumero(){
    let numeroEscolhido = parseInt(Math.random()*numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumero();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativas = 1;
    exibirInicio();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

/*let titutlo = document.querySelector('h1');
titutlo.innerHTML = 'Jogo do número Secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Digite um número entre 1 e 10';*/

/*function olaMundo(){
    console.log('Ola Mundo!');
}

function nome(){
    let nome = prompt('Digite seu nome!');
    console.log(`Ola, ${nome}!`);
}

function numero(){
    let numero = document.querySelector('input').value;
    console.log(`Retorno ${numero*2}`);
}*/