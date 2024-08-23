
var arrayNumber = [233, 77, 51, 1000, 6,,180]
//pop: quitar ultimo elemento de un array
var ultimoIndice = arrayNumber.pop()
//shift: quitar el primer elemento de un array

var primerIndice = arrayNumber.shift()

var semana = ["lunes", "martes", "miercoles", "jueves", "viernes"]

console.log(semana.indexOf("miercoles"))

//Filter : Filtra cada uno de los elementos
// num = iterador pero opera como cada elemento
let pares = arrayNumber.filter(num => num % 2 == 0)


let todosPares = arrayNumber.every(num => num % 2 == 0)

console.log(pares)
function revertirArray(array) {
    let izquierda = 0;
    let derecha = array.length - 1
  
    while (izquierda < derecha) {
        [  array[izquierda], array[derecha]  ] = [  array[derecha], array[izquierda]  ]

        izquierda++
        derecha--
    }
    return array

}

//let revertArray = arrayNumber.reverse()
let revertArray = revertirArray([233, 77, 51, 1000, 6, 180])
let reverseArray2 = [233, 77, 51, 1000, 6, 180].reverse()
console.log(reverseArray2)

//Length : devolver el tamaño del array
var departamentos = ["Cusco", "La libetad", "Lambayeque", "Lima"]
var long = departamentos.length


//Push 
departamentos.push("Loreto")

console.log(departamentos)

//Unshift

departamentos.unshift("Puno")
console.log(departamentos)