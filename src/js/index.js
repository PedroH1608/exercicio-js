const setaEsquerda = document.getElementById('seta-esquerda');

const setaDireita = document.getElementById('seta-direita');

const fundo = document.querySelectorAll('.fundo');

let imagemAtual = 0;

setaEsquerda.addEventListener('click', () => {
    if(imagemAtual === 0){
        return;
    };

    esconderImagem();
    imagemAtual--;
    fundo[imagemAtual].classList.add('mostrar');
    mostrarEsconderSeta();

})

setaDireita.addEventListener('click', () => {
    if(imagemAtual === fundo.length - 1){
        return;
    };

    esconderImagem();
    imagemAtual++;
    fundo[imagemAtual].classList.add('mostrar');
    mostrarEsconderSeta();

})

function esconderImagem(){
    const imagemAberta = document.querySelector('.mostrar');
    imagemAberta.classList.remove('mostrar');

}

function mostrarEsconderSeta(){
    const naoPrimeiraImagem = imagemAtual !== 0;
    if(naoPrimeiraImagem){
        setaEsquerda.classList.remove('opacidade')
    }else{
        setaEsquerda.classList.add('opacidade');
    }

    const ultimaImagem = imagemAtual !== 0 && imagemAtual === fundo.length - 1;
    if(ultimaImagem){
        setaDireita.classList.add('opacidade');
    }else{
        setaDireita.classList.remove('opacidade');
    }
}