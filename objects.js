var deportes = { 
    conBalon: ["Football", "Basketball", "Rugby"],
    sinBalon: ["Boxeo", "Surf", "treking"],
};

var persona = { nombre: "Lucas", edad: 26, estudios: {esProgramador: true}};

//acceder a propiedad de objeto
//console.log(persona.edad);

//asignarle valores / cambiar
// persona.nombre = "Martin"; 
// console.log(persona.nombre);


//Crear Propiedades
var autos = {};
autos.marcas = ["Audi", "Ferrari", "Ford"];

//Eliminar propiedad
// delete autos.marcas;
// console.log(autos);

// var misFunciones = {
//     saludar: function (){
//         console.log("Hola");
//     },
// };

// misFunciones.saludar();

var prendas = {
    manos: ["Guantes", "Anillos"],
    pies: ["Zapatos", "Soquetes"]
};

// console.log(prendas.manos);
//Bracket-Notation : nueva propiedad
prendas["piernas"] = ["Pantalones", "Shorts"];

// console.log(prendas);

var comidas= {};
var diferenciaDeNotaciones = function (propUno, propDos) {
    comidas.propUno = ["Frutas", "Vegetales"];
    comidas [propDos] = ["Hamburguesas", "Papas Fritas"];
};
diferenciaDeNotaciones("saludable", "noSaludable");
console.log(comidas);





