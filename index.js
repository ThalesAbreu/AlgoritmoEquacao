const prompt = require("prompt-sync")()

var name = prompt("Qual o seu nome? ");

console.log("Olá " + name)
console.log("Me chamo Sexta-feira ")
var question = prompt("Gostaria de fazer um calculo de equanção do segundo grau? ")

if (question == "sim") {
    var a = +prompt("Digite o valor de A: ")
    var b = +prompt("Digite o valor de B: ")
    var c = +prompt("Digite o valor de C: ")
    var delta = (b*b) - 4*a*c
    var raiz = Math.sqrt(delta)
    var xl = (-b +  Math.round(raiz))/(2*a)
    var xll = (-b - Math.round(raiz))/(2*a) 

    console.log("A equação é " + a +"x2 " + " + " + b+"x " + "+ " + c)
    console.log("Delta é igua a " + delta)

    if (delta < 0) {
        console.log("Para Delta negativo, não existe raizes reais")
    } else if (delta == 0) {
        xl = (-b +  Math.round(raiz))/(2*a)
        console.log("Para Delta zero, temos duas raizes igual a " + xl)
    } else {
        xl = (-b +  Math.round(raiz))/(2*a)
        xll = (-b - Math.round(raiz))/(2*a)
        
        console.log("O valo de x' é: " + xl)
        console.log("O valor de x'' é: " + xll)
    }
} else {
    console.log("Obrigado!")
};
  





