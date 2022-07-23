//funçao para criar data e retornar os segundos

function criaHoradosSegundos(segundos){

    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR',{
        hour12: false, timeZone: 'GMT'
    })

}

const relogio = document.querySelector('.relogio')
let segundos = 0
let timer

function iniciaRelogio(){
         timer = setInterval(function(){
        segundos++
        relogio.innerHTML = criaHoradosSegundos(segundos)
    }, 1000)

}


function iniciar(){

    relogio.classList.remove('pausado')
    clearInterval(timer)
    iniciaRelogio()

}

function pausar(){

    relogio.classList.add('pausado')
    clearInterval(timer)
    
}

function zerar(){

    relogio.classList.remove('pausado')
    clearInterval(timer)
    relogio.innerHTML = '00:00:00'
    segundos = 0
}