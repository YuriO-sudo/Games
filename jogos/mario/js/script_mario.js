const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')

const jump = () => {
    mario.classList.add('jump')
    
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 1500)     //valor original 500
}

const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft;
    console.log(pipePosition + ' ' + 'cano')
    //  aqui mostra as posições do cano
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    /* esse mais antes do window ele transforma uma string em um inteiro */
    
    console.log(marioPosition + ' ' + 'mario')
    //  aqui pega as posições do pulo do mario
    
    
    // if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 55) {
        
        // posiçaocano menor que 120 e maior que 0 
        
        pipe.style.animation = 'none'
        pipe.style.left = '${pipePosition}px'
        
        mario.style.animation = 'none';
        mario.style.bottom = '${marioPosition}px'
        
        mario.src = '../images_mario/game-over.png'
        mario.style.width = '5%' //original 75px
        mario.style.marginLeft = '4%' //50px
        
        clearInterval(loop);
        
    }
    // mudei aqui pra 500 e o mario passa direto por todos os canos
    // mudei aqui pra 200 e o mario passa pelo primeiro cano , ta quase razoavel
    
},200) /*  100 */


const button = document.querySelector(".button-jump")

function restartGame() {
    window.location.reload(true)
    // console.log('click funcionando')
}

button.addEventListener('click',  jump)

button.addEventListener('click', function(){
    document.getElementById("mario_theme_song").play()
    })


