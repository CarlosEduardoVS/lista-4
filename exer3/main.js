/*3 – Faça um algoritmo que receba 10 idades, pesos e alturas, calcule e mostre:
• A média das idades das 10 pessoas;
• A quantidade de pessoas com peso_qt superior a 90 quilos e altura inferior a 1.50;
• A porcentagem de pessoas com idade entre 10 e 30 anos entre as pessoas que medem mais de
1.90.*/

/* Sessao function */
function media_idade(idade, total_idade) {
    for (var i = 0; i < 5; i++) {
        total_idade = total_idade + idade[i];
    }
    total_idade = total_idade / 5;
    return total_idade
}

function peso_qt(peso, altura, quantidade_peso) {
    for (var i = 0; i < 5; i++) {
        if ((peso[i] > 90) && (altura[i] < 150)) {
            quantidade_peso++;
        }
    }
    return quantidade_peso
}

function altura_qt(idade, altura, porcentagem, quantidade) {
    for (var i = 0; i < 5; i++) {
        if ((idade[i] >= 5 && idade[i] <= 30) && (altura[i] > 190)) {
            quantidade++;
        }
    }
    porcentagem = (100 * quantidade) / 5;
    return porcentagem.toFixed(1)
}
/* Main */
var idade = [5], total_idade = 0;
var peso = [5], altura = [5], quantidade_peso = 0, porcentagem, quantidade = 0;
for (var i = 0; i < 5; i++) {
    idade[i] = parseInt(prompt("Digite sua Idade: "));
    peso[i] = parseFloat(prompt("Digite seu Peso: "));
    altura[i] = parseFloat(prompt("Digite sua Altura: "));

}

alert("A media de idade: " + media_idade(idade, total_idade));

alert("Pessoas com mais de 90kg e menores que 150cm: " + peso_qt(peso, altura, quantidade_peso));

alert("Porcentagens de pessoas entre 10 e 30 anos com mais de 190cm: " + altura_qt(idade, altura, porcentagem, quantidade) + "% ");

console.log("A media de idade: " + media_idade(idade, total_idade));

console.log("Pessoas com mais de 90kg e menores que 150cm: " + peso_qt(peso, altura, quantidade_peso));

console.log("Porcentagens de pessoas entre 10 e 30 anos com mais de 190cm: " + altura_qt(idade, altura, porcentagem, quantidade) + " % ");