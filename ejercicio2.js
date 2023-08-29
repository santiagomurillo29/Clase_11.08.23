// Promedio de edad
//Se pide ingresar una cantidad de personas. Por cada persona ingresar el año de nacimiento e informar el promedio de edad de aquellos que son millenials.

let cantidadDePersonas = prompt("Digite la cantidad de personas:")
let cantidadMillenials = 0
let sumaEdades = 0

for(let i = 0; i < cantidadDePersonas; i++){
    let nacimiento = parseInt(prompt("Digite el año de nacimiento:"))
    let edad = new Date().getFullYear() - nacimiento

    if(nacimiento >= 1981 && nacimiento <= 1994){
        cantidadMillenials = cantidadMillenials + 1
        sumaEdades = sumaEdades + edad
    }

}

if(cantidadMillenials > 0){
    let promedioEdad = sumaEdades / cantidadMillenials
    console.log(`La cantidad de millenials es: ${cantidadMillenials}`)
    console.log(`El promedio de edades de los millenials es: ${promedioEdad}`)
}
else{
    console.log('No hay cantidad de millenials')
}