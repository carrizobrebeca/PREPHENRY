// function sumaTres(x){
//     console.log(x + 3);
// }

// sumaTres(5);


//Funciones
//PRIMERA forma de declarar una  funcion
// function sumaTres(x){
//    return x + 3;
// }
// sumaTres(5);

// // SEGUNDA
// var sumaTres = function (x){
//     return x + 3;
// }

// //TERCERA . Sintaxis: Funcion de Flecha
// var sumaTres = (x) => {
//    return x + 3;
// }


   
// //     console.log(x + 3);
// // }
// //  sumaTres(5);

function cuidadoConsoleLog(nombre){
    console.log(nombre);
    return nombre;
}

function cuidadoReturn(nombre){
    return nombre;
    console.log(nombre);
}

function otraFuncion(){
   return (
   "El nombre que retorna la funcion 'cuidadoConsoleLog' es: " + 
   cuidadoConsoleLog("Rebeca")
   );
}



