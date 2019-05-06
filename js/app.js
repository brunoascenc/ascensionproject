// Sticky Nav
const navBar = document.getElementsByClassName("navbar")
window.onscroll = function sticky(){
    if(window.pageYOffset > navBar[0].offsetTop){
        navBar[0].classList.add("sticky-nav")
    }else {
        navBar[0].classList.remove("sticky-nav")
    }
}

// Smooth Scroll
const scroll = new SmoothScroll('.navbar a[href*="#"]', {
    speed: 300
})

function landingScroll(target, duracao){
    var target = document.querySelector(target)
    let targetPosicao = target.getBoundingClientRect().top
    let pontoPartida = window.pageYOffset
    let distancia = targetPosicao - pontoPartida
    let comecoTempo = null

    function animacaoScroll(tempoAtual){
        if(comecoTempo = null) pontoPartida = tempoAtual
        let tempoDecorrido = tempoAtual - comecoTempo
        let comeco = ease(tempoDecorrido, pontoPartida, distancia, duracao)
        window.scrollTo(0,comeco)
        if(tempoDecorrido < duracao) requestAnimationFrame(animacaoScroll) 
    }

    function ease (t, b, c, d) {
        t /= d/2
        if (t < 1) return c/2*t*t*t*t + b
        t -= 2
        return -c/2 * (t*t*t*t - 2) + b
    }
    requestAnimationFrame(animacaoScroll)
}

const btnLanding = document.querySelector('.smooth')
btnLanding.addEventListener('click', () => {
    landingScroll('#fotos', 3600)
})


// Form Validation
function validarForm(){
    const inputEmail = document.getElementById('email').value
    const inputNome = document.getElementById('nome').value
    const inputMessage = document.getElementById('message').value

    if(inputNome === ""){
        document.getElementById('nomeMsg').innerHTML = "Put your name"
        return false

    }else if (inputEmail === ""){
        document.getElementById('emailMsg').innerHTML = "Put your email"
        return false

    }else if(inputMessage === ""){
        document.getElementById('textareaMsg').innerHTML = "Write a message"
        return false

    }else {
        alert('Thank you!')
        return true
    }
}
