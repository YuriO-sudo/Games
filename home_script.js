

// Função que cria um link com uma imagem
const createImageLink = (imageSrc, linkUrl) => {
    const linkElement = document.createElement('a')
    linkElement.href = linkUrl

    const imageElement = document.createElement('img')
    imageElement.src = imageSrc
   

    linkElement.appendChild(imageElement)

    return linkElement
};

const grid = document.querySelector('.grid')

const linksData = [
    { imageSrc: './home_images/mario.png' , linkUrl: './mario/index_mario.html' },
    { imageSrc: './home_images/cerebro.png', linkUrl: './jogo_memoria/login.html'},
    { imageSrc: './home_images/letraA.png', linkUrl: './abecedario/abecedario.html' },
    { imageSrc: './home_images/pikachu.png', linkUrl: './pokedex/pokemon.html' }
]

linksData.forEach(linkData => {
    const imageLink = createImageLink(linkData.imageSrc, linkData.linkUrl)
    // const imageLink = createImageLink(linkData.imageSrc, linkData.linkUrl);
    grid.appendChild(imageLink)
});


// função que cria um elemento no html usando tag e o nome da classe como parâmetros
const createElement = (tag, className) => {
    const element = document.createElement(tag)
    element.className = className
    return element
}


let firstCard = ''
let secondCard = ''
let thirdCard = ''
let forthCard = ''


const revealCard  = ({target}) => {
    
    if(target.parentNode.className.includes('reveal-card')) {
        return
    }
    
    if(firstCard === '') {
        target.parentNode.classList.add('reveal-card')
        firstCard = target.parentNode
        
    } else if (secondCard === '') {
        target.parentNode.classList.add('reveal-card')
        secondCard = target.parentNode
    }

    else if (thirdCard === '') {
        target.parentNode.classList.add('reveal-card')
        thirdCard = target.parentNode
    }

    else if (forthCard === '') {
        target.parentNode.classList.add('reveal-card')
        forthCard = target.parentNode
    }
  
}



// função que cria a carta
const createCard = (character) => {
    
    const card = createElement('div', 'card')
    const front = createElement('div', 'face front')
    const back = createElement('div', 'face back')
    
    front.style.backgroundImage = `url('./home_images/${character}.png')`
    
    card.appendChild(front)
    card.appendChild(back)
    
    card.addEventListener('click', revealCard)
    card.setAttribute('data-character', character)
    
    return card
    
}

// aqui é um loop que carrega as 5 cartas da tela inicial
// const loadHome = () => {
       
//         characters.forEach((character) => {
//         const card = createCard(character)
//         grid.appendChild(card)
        
//     })
// }

//     loadHome()




