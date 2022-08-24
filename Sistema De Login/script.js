
var names = []
var password = []

var index = 0
var choice = true


while(choice){
    var choice = prompt("1 // Cadastrar, 2 // Fazer Login, 3 // Encerrar 4 //Excluir Cadastro")
    if(choice == "1"){
            names[index] = prompt("Cadastre um Usuário")
            password[index] = prompt("Cadastre uma Senha")
            index++
    }
    
    if(choice == "2"){
        var comparador = 0
        var names2 = prompt("Qual seu usuário ?")
        var password2 = prompt("Qual sua Senha ?")
        for(var contador2 = 0; contador2 < names.length; contador2++){
        }
    }
    
    if(choice == "3"){
        choice = false
    }

}

console.log(names, password)