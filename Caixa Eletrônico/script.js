

var decisao = 1
var contador = 1

var saldoTotal = 0
var maiorValor = 0
var media = 0

var nome = prompt(" Bem-Vindo ao banco ! Digite seu Nome")
var cpf = prompt(" Agora digite seu CPF ")
var media = 0

var valores = []
var index = 0

while(decisao == 1){

    var Escolha = prompt(" Você gostária de fazer um Saque ou Depósito ? ")
    var valor = parseInt(prompt(" Qual valor ?"))
    var media = valor / contador

    if(valor > maiorValor){
        maiorValor = valor
    }

    if(Escolha == "Saque"){
        if(valor > saldoTotal || valor < 0){
            alert(" Você não tem grana pra Sacar ou Inseriu um valor negativo")
            contador = 1
        }
        saldoTotal = saldoTotal - parseInt(valor)
    }

    else{
        if(valor < 0){
            alert(" Não pode ser depositado valores negativos")
            contador = 1
        }
        saldoTotal = saldoTotal + parseInt(valor)
        valores[index] = valor
        index++
    }

    decisao = prompt("Insira 1 para continuar e 2 para parar")
    if(decisao == "2"){
        decisao = 2
    }

    if(decisao == "1"){
        decisao = 1
    }
    
    contador++
}

if(saldoTotal < 0){
    saldoTotal = 0
}

console.log("O Saldo Total É: " ,saldoTotal)
console.log("O Maior Valor Inserido Foi: " ,maiorValor)
console.log("A média dos valores inseridos foi: " ,parseInt(media))