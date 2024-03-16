// Selecionando elementos e declarando às variáveis
const botaoPlayPause = document.getElementById('play-pause');
const botaoAvancar = document.getElementById('proximo');
const botaoVoltar = document.getElementById('anterior');
const nomeCapitulo = document.getElementById('capitulo');
const audioCapitulo = document.getElementById('audio-capitulo');

const numeroCapitulos = 10;
let taTocando = 0;
let capituloAtual = 1;

// Tocando a faixa ao clicar
function tocarFaixa(){
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill')
    botaoPlayPause.classList.add('bi-pause-circle-fill');
}

// Pausar a faixa ao clicar
function pausarFaixa(){
    audioCapitulo.pause();
    botaoPlayPause.classList.add('bi-play-circle-fill')
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
}

// Controle dos aúdios
function tocarOuPausar(){
    // Senão ta tocando irá tocar
    if (taTocando === 0){
        tocarFaixa();
        taTocando = 1;
    // Se ta tocando irá pausar
    }else{
        pausarFaixa();
        taTocando = 0;
    }
}

// Trocar o nome da faixa
function trocarNomeFaixa(){
    nomeCapitulo.innerText = 'Capítulo ' + capituloAtual;
}

// Avançar a faixa
function proximaFaixa(){
    if (capituloAtual === numeroCapitulos){
        capituloAtual = 1;
    }else{
        capituloAtual = capituloAtual + 1;
    }

    // Regra esperta pra mudar a faixa
    audioCapitulo.src = './books/dom-casmurro/' + capituloAtual + '.mp3';
    // Ao mudar de faixa automaticamente irá tocá-la
    tocarFaixa();
    // Caso não esteja em nenhuma faixa ou chegar a final, reiniciará e voltará para a inicial
    taTocando = 1;
    // Mudando o nome para a próxima faixa
    trocarNomeFaixa();
}

// Retroceder a faixa
function voltarFaixa(){
    if (capituloAtual === 1){
        capituloAtual = numeroCapitulos;
    }else{
        capituloAtual = capituloAtual - 1;
    }

    // Regra esperta pra mudar a faixa
    audioCapitulo.src = './books/dom-casmurro/' + capituloAtual + '.mp3';
    // Ao mudar de faixa automaticamente irá tocá-la
    tocarFaixa();
    // Caso não esteja em nenhuma faixa ou chegar a final, reiniciará e voltará para a inicial
    taTocando = 1;
    // Mudando o nome para a faixa anterior
    trocarNomeFaixa();
}

// Associando as funções aos botões
botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoAvancar.addEventListener('click', proximaFaixa);
botaoVoltar.addEventListener('click', voltarFaixa);