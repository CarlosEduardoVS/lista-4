/*1 – Faça um algoritmo que receba a idade e o peso de 7 pessoas, calcule e mostre:
• A quantidade de pessoas com mais de 90 quilos;
• A média das idades das 7 pessoas. */

/* Sessao funcition */
function mediaidade(idade, total_idade) {
    for (var i = 0; i < 7; i++) {
        total_idade = total_idade + idade[i];
    }
    total_idade = total_idade / 7;
    return total_idade
}
function quantipeso(peso, cont) {
    for (var i = 0; i < 7; i++) {
        if (peso[i] > 90) {
            cont++
        }
    }
    return cont
}
/* Main */
var total_idade = 0, idade = [7];
var peso = [7], cont = 0;
for (var i = 0; i < 7; i++) {
    idade[i] = parseInt(prompt("Digite sua Idade: "));
    peso[i] = parseFloat(prompt("Digite seu Peso: "));
}

alert("A media de idade é de: " + mediaidade(idade, total_idade));
alert("Quantidade de pessoas com mais de 90kg é: " + quantipeso(peso, cont));

console.log("A media de idade é de: " + mediaidade(idade, total_idade));
console.log("Quantidade de pessoas com mais de 90kg é: " + quantipeso(peso, cont));