// Vamos criar uma calculadora com as 4 operações matemáticas básicas? rs
// a) Deverá ser possível escolher uma operação aritimética em forma de 
// string: 'soma', 'multiplicacao', 'divisao' e 'subtracao'
// b) Deverá ser possível passar 2 números para a operação escolhida
// c) Deverá retornar o resultado e imprimir no console|


function conta(operacao: string, valor1: number, valor2: number) {
    
    var valor = valor1

    switch (operacao) {
        case 'soma':
            valor += valor2
            break
        case 'multiplicacao':
            valor *= valor2
            break
        case 'divisao':
            valor /= valor2
            break
        case 'subtracao':
            valor -= valor2
            break
        default:
            break;
    }
    return `O valor é : ${valor}`
}

console.log(conta('soma', 2, 2));
console.log(conta('multiplicacao', 10, 2));
console.log(conta('divisao', 10, 2));
console.log(conta('subtracao', 10, 2));