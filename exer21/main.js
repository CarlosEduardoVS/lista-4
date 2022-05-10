/* Sessao function */
function mediafinal(nota, notatotal, resultado) {
    for (var i = 0; i < 3; i++) {
        notatotal = notatotal + nota[i];
    }
    resultado = notatotal / 3;
    return resultado
}
function situacao(resultado, situa) {
    if (resultado > 6) {
        situa = "Aprovado";
        return situa
    } else {
        situa = "Reprovado";
        return situa
    }
}
/* Main */
var nota = [3], notatotal = 0, resultado = 0;
var situa;
for (var i = 0; i < 3; i++) {
    nota[i] = parseFloat(prompt("Digite sua " + (i + 1) + " do Bimestre: "));
}

resultado = mediafinal(nota, notatotal, resultado);

alert(mediafinal(nota, notatotal, resultado));
alert(situacao(resultado, situa));

console.log(mediafinal(nota, notatotal, resultado));
console.log(situacao(resultado, situa));