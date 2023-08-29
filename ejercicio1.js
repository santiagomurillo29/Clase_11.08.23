
// Dado un array de 10 numeros, donde cada número representa la nota de una alumna, informar el promedio tomando solo aquellas que tienen una nota mayor a 7.

notas = [5, 8, 10, 2, 5, 7, 9, 4, 1, 6]
cont = 0

for(let i = 0; i < notas.length; i++){
    if(notas[i] > 7){
        cont = cont + notas[i]
    }
}

promedioNotas = cont / 10
console.log(promedioNotas)