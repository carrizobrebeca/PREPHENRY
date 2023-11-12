class Persona{
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(){
        console.log("Hola mi nombre es "+this.nombre+". Tengo "+this.edad);
    }
}

class Programador extends Persona{
    constructor(nombre, edad, añosExperiencia) {
        super(nombre, edad);
        this.añosExperiencia = añosExperiencia;
    }
    codear(){
        console.log("Hola soy "+this.nombre+" codeo desde hace "+this.añosExperiencia+" años.");
    }
}

var martin = new Persona("Martín", 26);
var programador = new Programador("María", 37, 4);
// martin.saludar();
// programador.codear();

programador.saludar();




