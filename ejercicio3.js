// Datos de matriz

// Tenemos un array multidimensional de 15 filas y 12 columnas. Realizá un algoritmo que pida los datos para llenar el array, y que luego calcule y presente los resultados siguientes:
// El menor elemento del array
// La suma de los elementos de las cinco primeras filas del array
// La cantidad de elementos negativos en las últimas 4 columnas.


function llenarMatriz() {
    matriz = []

    for(let i = 0; i< 15; i++){
    matriz[i] = []

        for(let j = 0; j < 12; j++){
            numeroAleatorio  = Math.floor(Math.random() * (50 - 1) + 1 )
            matriz[i][j] = numeroAleatorio   
        }
    }
    return matriz
}
console.log(llenarMatriz())





function menorElemento () {
    llenarMatriz()
    menorValor = matriz[1][1]

    for(let i = 0; i < 15; i++){

        for(let j = 0; j < 12; j++){
            
            if(menorValor > matriz[i][j]){
                menorValor = matriz[i][j]
            }
        }
    }
    return menorValor
}

console.log(menorElemento())



function sumaElemento () {
    llenarMatriz()
    acum = 0

    for(let i = 0; i < 4; i++){

        for(let j = 0; j < 12; j++){
            numero = matriz[i][j]
            acum = acum + numero
        }
    }
    return acum
}

console.log(sumaElemento())

