
    const input1 = document.querySelector('#firstNo');
    const input2 = document.querySelector('#secondNo');
    

function somar (){
var resultado = new Calculadora(input1.value,input2.value)
document.querySelector('#resultado').value = "O resultado é " + resultado.soma()
}

let operacaoSoma = document.querySelector('#add')
operacaoSoma.onclick = () => somar();


function subtracao (){
    var resultado = new Calculadora(input1.value, input2.value)
    
    document.querySelector('#resultado').value = "O resultado é " + resultado.subtracao()
}
let operacaoSubtracao = document.querySelector('#subtract')
operacaoSubtracao.onclick = () => subtracao()


function multiplicacao () {
    var resultado = new Calculadora(input1.value, input2.value)
    document.querySelector('#resultado').value = "O resultado é " + resultado.multiplicacao()
}
let operacaoMultiplicacao = document.querySelector('#multiply')
operacaoMultiplicacao.onclick = () => multiplicacao()


function dividir(){
    var resultado = new Calculadora(input1.value, input2.value)
    document.querySelector('#resultado').value = "O resultado é " + resultado.divisao()
}
let operacaoDivisao = document.querySelector('#divide')
operacaoDivisao.onclick = () => dividir()