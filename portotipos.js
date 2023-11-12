//Prototipo

// Array.prototype.mayoresQueTres = function () {
//     var arregloModificado = [];

//     for (let i = 0; i < this.length; i++) {
//         if(this[i]>3) {
//             arregloModificado.push(false);
//         } else {
//             arregloModificado.push(this[i]);
//         }
//     }
//     return arregloModificado;
// };

// var arreglo = [1 ,2 ,3 , 4, 5];
// var nuevoArreglo = arreglo.mayoresQueTres();
// console.log(nuevoArreglo);

// class LatinoAmerica {
//     constructor() {
//         this.paises = [];
//     }
// }

// LatinoAmerica.prototype.agregarPais = function (pais) {
//     this.paises.push(pais);
// }

// let continente = new LatinoAmerica();
// continente.agregarPais("Mexico");
// console.log(continente.paises);


    // Escribi una función filtrar en el prototipo de Arrays,
    // que recibe una funcion (callback) que devuelve true o false.
    // filtrar los elementos de ese arreglo en base al resultado de esa funcion
    // comparadora, devolver un nuevo arreglo con los elementos filtrados.
    // NO USAR LA FUNCION FILTER DE LOS ARREGLOS.
    // ej:
    // var productos = [{
    //   price: 100,
    //   name: 'tv'
    // }, {
    //   price: 50,
    //   name: 'phone'
    // }, {
    //   price: 30,
    //   name: 'lamp'
    // }]
    // productos.filtrar(function(p) {
    //   return p.price >= 50;
    // }) => [{price: 100, name:'tv'}]
    
   function filtrar(funcion) {

    Array.prototype.filtrar = function (funcion){
        var filtrados = [];
    
        for (var i = 0; i < this.length; i++) {
          if(funcion(this[i])){
            filtrados.push(this[i]);
          }
        }
        return filtrados;
    }
  };

  




