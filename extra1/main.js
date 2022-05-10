/*function soma(vetor, resp) {
    resp = vetor.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        inicial
    );
    return resp
}
var vetor = [5], inicial = 0, resp;

for (var i = 0; i < 5; i++) {
    vetor[i] = Math.floor(Math.random() * 100) + 1;
    console.log(vetor[i]);
}
console.log("A soma de todos os numeros aleatorios é: " + soma(vetor, resp))
//-------------------------------------------------------------------------------------------------------------------*/
/* Sessao function */
function soma(matriz, resp, col, lin) {
    for (var i = 0; i < lin; i++) {
        for (var j = 0; j < col; j++) {
            resp = resp + matriz[i][j];
        }
    }
    return resp
}
/* Main */
var resp = 0, inicial = 0;
var col = parseInt(prompt("Digite a quantidade de colunas: "));
var lin = parseInt(prompt("Digite a quantidade de linhas: "));

let matriz = [lin, col];
//populando a matriz
for (let i = 0; i < lin; i++) {
    matriz[i] = [];
    for (let j = 0; j < col; j++) {
        matriz[i][j] =  Math.floor(Math.random() * 100) + 1;
    }
}
//exibindo a matriz
console.log(matriz);
console.log(soma(matriz, resp, col, lin));