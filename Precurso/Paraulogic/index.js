// Seleccionar elementos del DOM
const elementBody = document.querySelector("body");
console.dir(elementBody);
const elementsP = document.querySelectorAll(".highlighted");
console.dir(...elementsP);
const elementInputName = document.querySelector("#user-name");

// Leer el contenido de los elementos del DOM
const initialElementP = elementsP[0].innerHTML;
let userName;

// Responder a eventos del DOM
elementInputName.addEventListener(
  "input",
  userNameHandler
  // () => {
  //   userName = elementInputName.value;
  //   elementP.innerHTML = initialElementP + " - " + userName;
  // }
);

function userNameHandler() {
  userName = elementInputName.value;
  // Modificar eleentos del DOM
  elementsP[0].innerHTML = initialElementP + " - " + userName;
}