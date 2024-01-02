// Aula 01 - Operações básicas.

let valor1 = 4
let valor2 = 4
console.log('A soma é:', valor1 + valor2);
console.log('A subtração é:', valor1 - valor2);
console.log('A multiplicação é:', valor1 * valor2);
console.log('A divisão é:', valor1 / valor2);

// Aula 02 - Condicionais
// As estruturas condicionais estão ligadas a tomadas de decisões de um algoritimo. Ao utilizarmos as expressões que retornam verdadeiro ou falso, o algoritimo executa o bloco de comandos relativos a este resultado.

const idade = 15;

if(idade > 18){
    console.log('Maior que 18');
}else{
    console.log('Menor que 18.');
}

const nota = 4;

switch (nota) {
    case nota < 5:
        console.log("Abaixo da média");
        break;
        case nota  > 5:
            console.log("Dentro da média");
            break;    
            default:
        console.log('Acima da média.');
        break;
}

const note = 2
note > 5 ? console.log('Aprovado') : console.log('reprovado');

// Aula 03 - Tipos de Variaveis.

//Em JavaScript, variáveis são utilizadas para armazenar e representar dados. Elas são como "contêineres" que você pode usar para armazenar valores, e esses valores podem ser de diversos tipos, como números, strings, booleanos, objetos, funções, entre outros.

//Em JavaScript, você pode declarar variáveis usando as palavras-chave var, let ou const. A diferença entre elas está relacionada ao escopo e à mutabilidade da variável:

//var: Declara uma variável com escopo de função. Antigamente, var era a única forma de declarar variáveis em JavaScript, mas ela possui algumas características que podem causar confusão, como hoisting (içamento) e escopo global.

var x = 10;

//let: Introduz uma variável com escopo de bloco. Variáveis declaradas com let podem ser reatribuídas.

let y = "Olá, mundo!";

//const: Declara uma variável com escopo de bloco, assim como let, mas a diferença é que uma vez que você atribui um valor a uma constante, não pode reatribuir um novo valor a ela.

const PI = 3.14;







//Tipos de Variáveis
// Boolean = true e fale
//null = Nulo
//undefined = Não definido
//Number 42 ou 3.14159
//String = "Jaelson"

// Declarando variáveis
let nome = "João";
var age = 25;
const altura = 1.75;


// Utilizando variáveis
console.log("Nome:", nome);
console.log("Idade:", age);
console.log("Altura:", altura);

// Modificando o valor de uma variável
age = 26;
console.log("Nova idade:", age);

//Laços de Repetição
console.log('Tabuada do 5, utilizando laço de repetição.');
for (let index =1; index <= 10; index ++){
    console.log(`${index} x 5 = ${index * 5}`);
}


console.log('===========================');
let tab = 1;
while(tab < 11) {
    console.log(`${tab} x 5 = ${tab * 5}`);
    tab++;
}

console.log('*******************');

// forEach normalmente utilizamos par se trabalhar com arrays.

const valores = [1,2,3,4,5,6,7,8,9,10];
valores.forEach((value) => {
    console.log(`${value} x 5 = ${value * 5}`);
});

// Método map retorna um valor para nós.
const valores2 = [1,2,3,4,5,6,7,8,9,10];
console.log('--------------------');
const resultado = valores2.map((value)=> {
    return value * 5;
} );

console.log(resultado);

// Aula 06 Arrow Functions

// De modo geral, função é um "subprograma" que pode ser chamado por código externo (ou interno no caso de recursão) á função. Assim como o programa em si, uma função é composta por uma sequência de instruções chamada corpo da função. Valores podem ser passados para uma função e ela vai retornar um valor.

console.log('++++++++++++++++++++');

function soma(num1, num2) {
    return num1 + num2
}

const result1 = soma(2,3);
console.log(result1);

// Para Arrow functions podemos armazenar a função dentro de uma variável.

const soma2 = (num3, num4) => num3 + num4;


const result2 = soma2(5,5);
console.log(result2);

//Aula 07 Arrays

// Arrays são geralmente listas de objetos; são básicamente objetos que contem múltiplos valores armazenados em uma lista. Um array pode ser armazenado em variáveis e ser tratado de forma muito similar a qualquer outro tipo de valor, a diferença esta em podermos acessas cada valor dentro da lista individualmente, e fazer super uteis e eficientes coisas com a lista, como laço atraves de lista e fazer a mesma coisa com cada valor.

const family = [
    {
        name: 'José',
        age: 58,
    },
    {
        name:'Jaelson',
        age: 33,
    },
    {
        name: 'Catarina',
        age: 52,
    },
    {
        name: 'Thainah',
        age: 24,
    },
];

family.push({
    name: 'Alice',
    age: 5,
})

console.log(family[4]);


console.log('********** Aula - 08 *************');


// Aula 08 - funcionalidade do ES6*

// Filter

const filtroFamilia = family.filter(family => family.age < 55);
console.table(filtroFamilia);
console.log('------------');
const joseFamily = family.find((jose) => jose.name === 'José');
console.log(joseFamily);
const joseFamilyI = family.findIndex((jose) => jose.name === 'José');
console.log(joseFamilyI);

const idades = family.reduce((acc, membro) => {
    return acc + membro.age
},0);

console.log(idades);

const acimaDeNove = family.some(family => family.age < 10);
const menorQueNoventa = family.every(family => family.age < 90);
console.log(acimaDeNove);
console.log(menorQueNoventa);