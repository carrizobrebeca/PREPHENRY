//** 
let num = 14;
let array = [12,24,15,65,3];  //length = 5 elementos
//      i=    0  1  2  3 4    i llega hasta 5
// array[i] en primera vuelta va a ser 0, array[0] = 12
// entonces comparamos array[0] con num --> 
//if : si elemento de array es mayor a num
//se ejecuta {}
//debemos declarar un arraynuevo vacio, 
//para luego llenarlo en el {}

function encuentraMayor(array,num){
    //Funcion devuelve un array con todos los elemetos del array recibido por argumento 
    //que sean mayores que el valor recibido por num
    //(comparar cada elemento del array con el valor que da num)
    //comparado, debemos ver cuales elementos son mayores a num
    //devolverlos en un array nuevo
    //para probar declaramos un num y un array fuera **
    // array a devolver seria: [24,15,65]

    //comparar todos los elementos recibidos :
    let arrayNuevo = [];
    for ( let i=0 ; i < array.length; i++){
        if (array[i] > 18){
            arrayNuevo.push(array[i]);
        }
    }
    return arrayNuevo;
    
}

let resultado = encuentraMayor(array, num);
console.log(resultado);