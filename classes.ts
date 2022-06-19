class Data {
//    public dia: number;
//    private mes: number;
//    ano: number;

    constructor(public dia: number, public mes: number, public ano: number = 1970) {
//        this.dia = dia;
//        this.mes = mes;
//        this.ano = ano;
    }
}

const data = new Data(1, 1, 2020);
console.log(data.dia);
console.log(data.mes);        // da erro pq e privada

const data2 = new Data(1, 1);  // vai pega o defallt 1970

// Aula Modificadores

class Carro {

    private velocidadeAtual: number = 0;

    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 220
    ) {} 

    private alterarVelocidade(delta: number) {
        const novaVelocidade = this.velocidadeAtual + delta;
        
        if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
            this.velocidadeAtual = novaVelocidade;
        }
    }

    acelerar() {
        this.alterarVelocidade(5)
    }

    frear() {  
        this.alterarVelocidade(-5)    
    }
}



const carro = new Carro('chevrolet', 'prisma', 250);
carro.acelerar();
