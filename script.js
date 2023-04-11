let waga = document.querySelector("#waga").value;
let paliwo = document.querySelector("#paliwo").value;
let pojemnosc = document.querySelector("#pojemnosc").value;
const oblicz = document.querySelector("#oblicz");
let wagaInt = Number(waga);
let paliwoInt = Number(paliwo);
let pojemnoscInt = Number(pojemnosc);
let suma = wagaInt + pojemnoscInt;


oblicz.addEventListener("click", function(){
console.log(wagaInt);
console.log(paliwoInt);
console.log(pojemnoscInt);

console.log(suma);



})
