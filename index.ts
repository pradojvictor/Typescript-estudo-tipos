// String
const nome: string = "Prado";

// Array
const nomeDosAlunos: string[] = ["prado", "beatriz", "joao"]

const alunos: Array<string> = ["prado", "beatriz", "joao"]

// tuple
let animal: [string, boolean, string, number];
animal = ["cachorro", true, "coelho", 20]

// boolean
const aprovado: boolean = true

// number
const notas: number = 10

// Enum
enum StatusAprovacao {
    aprovado = "1",
    reprovado = "2",
    pendente = "3",
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.aprovado

// Any  => sempre evitar ao maximo
const infoAPI: any[] = ["cachorro", true, "coelho", 20, "oi"]

// void 
function teste(msg: string): void {
    console.log(msg);
}

// Null e Undefined
const u: undefined = undefined;
const n: null = null;

// Object
function novaFuncao(Object: object) {
    //....
}
novaFuncao({
    chave1: 1,
    chave2: 2,
});

// Never
function loopInfinito(): never {
    while (true) {
        //....
    }
}

function error(msg: string): never {
    throw new Error(msg)
}

function falhaNoSistema() {
    return error("Ooops, algo deu errado!")
}

// Union Types
function mostrarNota(nota: number | string) {
    console.log(`sua nota é ${nota}`);
}
mostrarNota("20");

// Alias

type Aluno = {
    nome: string;
    sobrenome: string;
    idade: number;
    solteiro?: boolean;   // não é obrigatorio
}


const alunos2: Aluno[] = [
  {
    nome: "victor",
    sobrenome: "prado",
    idade: 26,
    solteiro: true,
  },
  {
    nome: "joao",
    sobrenome: "lima",
    idade: 24,
  },
];

let altura: number | null = 1.7
altura = null


// exercicio type

//  {
//     "postId": 1,
//     "id": 1,
//     "name": "id labore ex et quam laborum",
//     "email": "Eliseo@gardner.biz",
//     "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
//   },

type Post = {
      postId: number;
      id: number;
      name: string;
      email: string;
      body: string;
}
const cliente: Post[] = [{
    postId: 1,
    id: 1,
    name: "id labore ex et quam laborum",
    email: "Eliseo@gardner.biz",
    body: "laudantium enim quasi est quidem magnam voluptate ipsam accusantium"
}]


// aula Type Assertion
const minhaIdade: any = 26;
(minhaIdade as number).toString();             // a parti daqui o typescript ira entender que minhaIdade retorna um numero

const input = document.getElementById("numero1") as HTMLInputElement;
console.log(input.value);

// ou

const innput = <HTMLInputElement>document.getElementById("numero1");
console.log(input.value);