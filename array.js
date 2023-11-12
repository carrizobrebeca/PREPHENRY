// var listaDeCompas = [];
// listaDeCompas [3] = "Tomates"; 
// listaDeCompas [1] = "Lechuga"; 
// listaDeCompas [0] = "Huevos"; 
//console.log(listaDeCompas);

//listaDeCompas[3];
// var elementoArray = listaDeCompas[3];
// console.log(elementoArray);

// console.log(listaDeCompas.length);

// var colores = ["amarillo", "azul"];
// colores.push("rojo"); //agrega un elemento al final 
// colores.unshift("lila"); // agrega al principio
// colores.pop();  //elimina el ultimo
// colores.shift(); //elimina el primero 
// console.log(colores);

// var pintores = ["Picasso" , "Dali"];
// var incluyeDali = pintores.includes("Monet");
// console.log(incluyeDali);

// var numeros = [10,22,6,9];
// var cumpleCondicion = numeros.every((num) => {
//     return num > 5;
// });
//  console.log(cumpleCondicion);

// var palabra = "Henri";
// var palabraSeparada = palabra.split('');
// //console.log(palabraSeparada);
// palabraSeparada.pop();
// palabraSeparada.push('y');
// console.log(palabraSeparada);
// var palabraArreglada = palabraSeparada.join('');
// console.log(palabraArreglada);

// var numeros = [1,2,3,4];
//numeros.forEach((num) => console.log(num));
// numeros.forEach((num) => {
//     if(num===3){
//         console.log(num)
//     }
// });
//  var masUno = numeros.map(num => {
//     return num + 1;
// });
//  console.log(masUno);


//Bucle For

var array = [1,2,3,4,5];
 
// for (var i = 0 ; i<arreglo.length; i++){
//     console.log(arreglo[i]);
// }

// function encontrarLetraP(string) {
//     var letra = string.split('');

//     for (let i = 0 ; i < letra.length; i++) {
//         if (letra[i] === 'p'){
//         console.log('Si contiene a P');
//     }
//   }
// }

// encontrarLetraP('JavaScript');
// encontrarLetraP('Henry');

//Bucle While



function devolverUltimoElemento(array) {
    return array[array.length - 1];
    var ultimoElemento = devolverUltimoElemento(array);
    console.log(ultimoElemento); 
}
 