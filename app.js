// Em Javascript faça uma calculadora:
// 1. Pergunte para o usuário dois números;
// 2. Pergunte para o usuário a operação que deseja, deve possuir as opções de adição, subtração, multiplicação, divisão e porcentagem;
// 3. Resolva a operação com os números informados;
// 4. Mostre para o usuário o resultado da operação;
// 5. Valide a entrada do usuário e trate os possíveis erros (exceções tanto da lógica do código como também casos especiais da matemática).

const prompt = require('prompt-sync')();

let primeiroNumeroStr = prompt("Informe o primeiro número: ")
let primeiroNumero = parseFloat(primeiroNumeroStr)
let segundoNumeroStr = prompt("Informe o segundo número: ")
let segundoNumero = parseFloat(segundoNumeroStr)

let operacao = prompt("Escolha uma das seguntes operações: Adição, Subtração, Multiplicação, Divisão ou Porcentagem: ").toLocaleLowerCase()

function contaFunction(primeiroNumero, segundoNumero) {
    if (operacao == "adição") {
        console.log(`A conta a ser feita é: ${primeiroNumero} + ${segundoNumero}`) 
        return primeiroNumero + segundoNumero
    }
    else if (operacao == "subtração") {
        console.log(`A conta a ser feita é: ${primeiroNumero} - ${segundoNumero}`) 
        return primeiroNumero - segundoNumero
    }
    else if (operacao == "multiplicação") {
        console.log(`A conta a ser feita é: ${primeiroNumero} * ${segundoNumero}`) 
        return primeiroNumero * segundoNumero
    }
    else if (operacao == "divisão") {
        if (primeiroNumero == 0 || segundoNumero == 0) {
            console.log("Não é possível fazer divisão com zero.")
            process.exit();
        }
        else {
            console.log(`A conta a ser feita é: ${primeiroNumero} / ${segundoNumero}`) 
            return primeiroNumero / segundoNumero
        }
    }
    else if (operacao == "porcentagem") {
        console.log(`A conta a ser feita é: ${primeiroNumero}% de ${segundoNumero}`)
        return (primeiroNumero / 100) * segundoNumero
    }
    else {
        console.log("Operação inválida.")
    }
}

let conta = contaFunction(primeiroNumero, segundoNumero)

console.log(`O resultado total é ${conta}`)


