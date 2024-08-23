/* 
Author: Richard Espino
Estructura de dato: Condicionales
*/
//Nota: Para comparaciones de string con number
// = valor : No usar en javascript
// == Son del mismo valor 
// === Son son del mismo valor y tipo de dato

// != No son del mismo valor
// !== No son del mismo valor ni del mismo tipo

var x = "20"
var y = 20

console.log(x == y)
console.log(x != y)
console.log(x === y)
console.log(x !== y)


if (x == y) {
    console.log("Test1: Son del mismo valor")
} else {
    console.log("Test1: No son del mismo valor")

}

//Negando si son distintos en valor 
if (x != y) {
    console.log("Test2: No son del mismo valor")
} else {
    console.log("Test2: Son del mismo valor")

}

//Tienen que cumplirse ambas premisas de tipo de dato y el valor para que sea tru
if (x === y) {
    console.log("Test3: Son del mismo valor y tipo de dato")
} else {
    console.log("Test3: No del mismo valor o no son del mismo tipo de dato")
}

//Negando si son distintos en valor y en tipo de dato
if (x !== y) {
    console.log("Test4:  No del mismo valor o no son del mismo tipo de dato")
} else {
    console.log("Test4: Son del mismo valor y  del mismo tipo")
}

//Validaciones con booleanos
var bandera = true

if (!bandera) {
    console.log("Correcto")
} else {
    console.log("Incorrecto")
}


//else if: Agrega un if a continuación de un else para no anidar mucho los bloques de codigo

var nota = 12
if(typeof(nota) != "number"){
    console.error("No es un numero")
}else if(nota >=11){
    console.log("Aprobado")
}else{
    console.log("Desaprobado")
}


//Condicional multiple
const hoy = 1

switch (hoy) {
    case 1: console.log("Lunes")
        break
    case 2: console.log("Martes")
        break
    case 3: console.log("Miercoles")
        break
    case 4: console.log("Jueves")
        break
    case 5: console.log("Viernes")
        break
    case 6: console.log("Sábado")
        break
    case 7: console.log("Domingo")
        break

    default: console.log("No es un dia")
}


const fruta = "Pera"

switch (fruta) {
    case "Pera": {
        var nombre_fruta = "🍐"
        let bandera = false
        if (!bandera) {
            console.log(nombre_fruta)
        }
    }
        break
    case "Manzama": console.log("🍎")
        break
    case "Sandia": console.log("🍉")
        break
    default: console.log("No es una fruta")
}


//Operador ternario
var edad = 15
edad >= 18
? console.log("Es mayor de edad") 
: console.log("No es mayor de edad")

