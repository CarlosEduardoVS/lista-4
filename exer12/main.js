/* Sessao function */
function conta(valores, resp) {
    resp = (valores[0] ** valores[1]) * valores[2];
    return resp
}
/* Main */
var valores = [3], resp;
valores[0] = parseFloat(prompt("Digite o valor de A: "));
valores[1] = parseFloat(prompt("Digite o valor de B: "));
valores[2] = parseFloat(prompt("Digite o valor de C: "));

alert("O resultado dessa conta é de: " + conta(valores, resp));
console.log("O resultado dessa conta é de: " + conta(valores, resp));