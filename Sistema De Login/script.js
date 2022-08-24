

var names = []
var password = []

var choice = true
var index = 0

while(choice){
    names[index] = prompt("Digite seu Usuário")
    password[index] = prompt("Digite ssua Senha")

    index++
}

console.log(names, password)