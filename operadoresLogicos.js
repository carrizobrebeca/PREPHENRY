// function menorMayorPar(num){
//  if(num > 5 && num < 10 && num % 2===0)console.log(true);
//  else console.log(false);
// }

// menorMayorPar(7);
// menorMayorPar(8);

// function operadorOr(str){
//     if (str === "Henry" || str.length > 2)console.log(true)
//     else console.log(false);
// }
// operadorOr("Henry");
// operadorOr("JavaScript");
// operadorOr("H");

// function negacion(permiso){
//     if(permiso)console.log("Tiene permiso");
// }

// negacion(true); // "Tiene permiso"

// function negacion(permiso){
//     if(!permiso)console.log("Tiene permiso");
// }
// negacion(false);  // "Tiene permiso"

// function negacion(permiso){
//     if(permiso === true)console.log("Tiene permiso");
// }

// negacion(true); // "Tiene permiso"

// function negacion(permiso){
//     if(permiso !== true)console.log("Tiene permiso");
// }

// negacion(false); // "Tiene permiso"

function condicionCompleja(num){
    if (num >9 && num % 2===0 || num===3)console.log(true)
    else console.log(false);
}

condicionCompleja(10);
condicionCompleja(6);
condicionCompleja(3);
condicionCompleja(5);

