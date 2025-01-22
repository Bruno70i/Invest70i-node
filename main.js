function addaparelho() {
    var input = document.createElement('input')

    input.style.margin = "10px"
    input.type = 'number'
    input.innerHTML = 'hello'

    document.getElementById('new-aparelho').appendChild(input)
}


function calcular() {
    var valor1 = document.getElementById('wattsaparelho01').value
    var valor2 = document.getElementById('wattsaparelho02').value
    var res = document.getElementById('res')
    var s = parseFloat(valor1) + parseFloat(valor2)
    res.innerHTML = `O resultado da soma de ${valor1} e ${valor2} é ${s}`
    
}