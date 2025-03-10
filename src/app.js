window.onload = function() {
  generateCard();
  document.getElementById("newCard").addEventListener("click", generateCard);
  setInterval(generateCard, 10000);
};

function getRandomFromArray(values) {
  return values[Math.floor(Math.random() * values.length)];
}

function generateCard() {
  let palo = getRandomFromArray(["diamante", "corazon", "pica", "trebol"]);
  let valor = getRandomFromArray(["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]);
  let imagen = `./assets/img/${palo}.png`; // Asegúrate de que la ruta sea correcta

  document.getElementById("palo-top").src = imagen;
  document.getElementById("palo-bottom").src = imagen;
  document.getElementById("valor").innerText = valor;

  document.getElementById("valor").style.color = (palo === "corazon" || palo === "diamante") ? "red" : "black";
}