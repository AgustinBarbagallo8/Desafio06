console.log("/* PUNTO C */")

var cantidadDeGatos = 10;

var cantidadDePasos = 4;

for (var gato = 1; gato <= cantidadDeGatos; gato++) {
  var pasos = '';
  for (var paso = 0; paso < cantidadDePasos; paso++) {
    pasos += '🐾';
  }
  
  var gatoEmoji = gato % 2 === 0 ? '🐈‍⬛' : '🐈';
  console.log('Gato #' + gato + ': ' + gatoEmoji + ' ' + pasos);
}