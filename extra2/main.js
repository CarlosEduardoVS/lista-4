//Sessao function
function soma(valor, resultado) {
  resultado = valor.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    inicial
  );
  return resultado
}
//declarando as variaveis
var valor = [6], inicial = 0, resultado;
let matrix3x = [3, 3];
//populando a matriz
for (let i = 0; i < 3; i++) {
  matrix3x[i] = [];
  for (let j = 0; j < 3; j++) {
    matrix3x[i][j] = Math.floor(Math.random() * 100) + 1;
  }
}
//exibindo a matriz
console.log(matrix3x);

//ida
valor[0] = matrix3x[0][0] * matrix3x[1][1] * matrix3x[2][2];
valor[1] = matrix3x[0][1] * matrix3x[1][2] * matrix3x[2][0];
valor[2] = matrix3x[0][2] * matrix3x[1][0] * matrix3x[2][1];

//volta
valor[3] = matrix3x[0][1] * matrix3x[1][0] * matrix3x[2][2] * -1;
valor[4] = matrix3x[0][0] * matrix3x[1][2] * matrix3x[2][1] * -1;
valor[5] = matrix3x[0][2] * matrix3x[1][1] * matrix3x[2][0] * -1;

//exibindo o valor de cada conta
console.log("Det A = " + valor[0] + " " + valor[1] + " " + valor[2] + " " + valor[3] + " " + valor[4] + " " + valor[5]);

console.log("O resultado final da determinante A vai ser de: " + soma(valor, resultado));