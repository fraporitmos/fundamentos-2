//Tipado Dinamico: asigna tipos de datos de manera automatica 
//Case sentive: distingue mayusculas de minusculas
//Frontend: Parte visial relacionada con la experiencia de usuario, ejem: botones, naveegacion, comentarios,etc React, Angular, Svelte, Vue, Next
//Backend: Pate no visual que provee en cualquier momento todas las solicitudes necesarias. Node JS
//Javascript Vanilla: Javascript Puro/Nativo
//Scope: Alcance que tenemos dentro de un bloque codigo
//Variables Locales:
//Variables Globales:

//API: Application Programming Interface 
//Ejemplo
/*https://misrecetas.com/recetas/ecudor
GET : Obtener datos
POST: Enviar datos

200 Exitoso
400 Error de usuario 
404 No encontrado
500 Error Servidor */

/* 
Dev: Richard Espino
Este programa es una clase inicial al curso de Especialización en Frontend
*/

// variable globales
const PI = 3.14
const BASE_URL = "https://misrecetas.com/recetas/peru"
const API_KEY = "nmdjksahj8fdsd89f6dsf6ds8a76fds6fds"


function mifuncion2(){
    var docente = "Otro docente"
    console.log(PI)
}


function mifuncion(){
    // variable locales
    var docente = "Richard Espino"
    let alumno = "Angela"
    if(true){
        let isDocente = true // variable local
        var docente  = "Richard Docente" //reasignar
        alumno = "Jesus"       
        if(true){
            docente = "Richard Docente 2"
            console.log(PI) // Las constances tambien tienen mas alcance
        }
    }
    console.log(docente)
    console.log(alumno)
}

mifuncion()
