console.log("/* PUNTO B */")

var cantidadDeGatos = 5;

var cantidadDePasos = 3;

for (var gato = 1; gato <= cantidadDeGatos; gato++) {
  var pasos = '';
  for (var paso = 0; paso < cantidadDePasos; paso++) {
    pasos += '🐾';
  }
  console.log('Gato #' + gato + ': 🐈 ' + pasos);
}