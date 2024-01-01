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