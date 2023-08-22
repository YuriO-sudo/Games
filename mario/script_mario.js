const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

setTimeout(() => {
    mario.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft; 
    /*console.log(pipePosition); aqui mostra as posições do cano*/
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
/* esse mais antes do window ele transforma uma string em um inteiro */
    /*console.log(marioPosition); aqui pega as posições do pulo do mario*/

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        
        pipe.style.animation = 'none';
        pipe.style.left = '${pipePosition}px';

        mario.style.animation = 'none';
        mario.style.bottom = '${marioPosition}px';

        mario.src = 'game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);

    }

},10);

const button = document.querySelector(".button");

function restartGame() {
    window.location.reload(true)
    // console.log('click funcionando')
}

document.addEventListener('keydown', jump);

