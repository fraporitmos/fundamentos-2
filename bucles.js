
// WHILE: Mientras algo sea verdadero se cumple el bucle
let i = 1
while(i <= 10){
    //Impromir los 10 primeros numeros pares
   if(i%2==0){
    //console.log(i)
   } 
   i++ //i = i+1
}

// DO WHILE: Asegura que el bloque de codigo se ejecute al menos una vez y se repito el bloque DO mientras la condicion sea verdadera

let iterador = 1
do{
    //console.log(iterador)
    iterador++
}while(iterador>10) 
// La condicion del while no se cumple entonces solo se ejecuta una vez



//FOR: Bucle tradicional que se usa cuando conocemos de antemano cuantas veces queremos iterar

for(let i=1; i<= 10; i++){
    if(i%2==0){
        console.log(i)
    }
}

//TODO Implementar los tipos de datos for in, for of Array.protoype.forEach

