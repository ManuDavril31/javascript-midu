//Los tipos primitivos son inmutables
const list = [];

//ha este array quiero concatenar este valor
const anotherList = list.concat(157);
console.log(anotherList);
//Iterando la lista
// anotherList.forEach();

const persona = {
  Firstname: "Manuel",
  twitter: "@manudavril",
  age: 31,
  isDeveloper: true,
  links: ["https://entonomedia.com", "htts://twuitter.com/manudavil"],
};

const field = "twitter";

//En el objeto persona entra a una variable con el valor twitter
console.log(persona[field]);

// Intenta acceder al campo con el string field, lo cual no devuelve undefined por que no hay propiedad llamana field en el objeto persona

console.log(persona["field"]);

//----------------------------
//Función asignada
const sumar = (a, b) => {
  console.log(a);
  console.log(b);
  return a + b;
};

console.log(sumar(2, 2));

//Funcion declarada
function restar(a, b) {
  return a - b;
}


//https://www.youtube.com/watch?v=YLvT1ELnaX4&list=PLV8x_i1fqBw0Kn_fBIZTa3wS_VZAqddX7&index=2&ab_channel=midudev

//minuto 40
