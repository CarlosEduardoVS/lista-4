/* Sessao function */
function conta(valores, resp) {
    resp = ((valores[0] ** 5) * valores[1]) ** valores[2];
    return resp
}
/* Main */
var valores = [3], resp;
valores[0] = parseFloat(prompt("Digite o valor de X: "));
valores[1] = parseFloat(prompt("Digite o valor de Y: "));
valores[2] = parseFloat(prompt("Digite o valor de Z: "));

alert("O resultado dessa conta é de: " + conta(valores, resp));
console.log("O resultado dessa conta é de: " + conta(valores, resp));