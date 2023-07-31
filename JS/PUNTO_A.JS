var cantidadDeGatos = 10;

for (var gatos = 1; gatos <= cantidadDeGatos; gatos++) {
  var emoji;
  switch (gatos % 3) {
    case 0:
      emoji = "😹";
      break;
    case 1:
      emoji = "😺";
      break;
    case 2:
      emoji = "😸";
      break;
  }
  console.log('Gato #' + gatos + ': ' + emoji);
}