// obtenerChatStatus(usuarias)
// Crear una función obtenerChatStatus que tome como argumento un array de strings usuarias y devuelva un string con el status del chat. Las reglas son:

// Para una usuaria, debe mostrar: NOMBRE_USUARIA_1 está conectada
// Para dos usuarias, debe mostrar: NOMBRE_USUARIA_1 y NOMBRE_USUARIA_2 + están conectadas
// Para más de dos usuarias, debe mostrar: NOMBRE_USUARIA_1, NOMBRE_USUARIA_2 y X persona(s) más están conectadas
Ejemplo:

// obtenerChatStatus(['Ada']) // 'Ada está conectada'
// obtenerChatStatus(['Ada', 'Grace']) // 'Ada y Grace están conectadas'
//obtenerChatStatus(['Ada', 'Grace', 'Marie']) // 'Ada, Grace y 1 persona(s) más están conectadas'

function obtenerChatStatus(nombreUsu, estado) {
    let nombreConn;
    let acum = 0;
    
    for(let i = 0; i < nombreUsu.length; i++){
        acum = acum + 1
    }
    nuevoResultado = acum - 2
    let array  = ['y', nuevoResultado, 'persona(s)']
    let joi = array.join(' ')
    
    if (nombreUsu.length === 1) {
        nombreConn = `${nombreUsu[0]} ${estado}`;
    }

    if(nombreUsu.length === 2){
        nombreConn = `${nombreUsu[0]}, ${nombreUsu[1]},  ${estado}`;
    }

    if(nombreUsu.length > 2){
       
        nombreConn = `${nombreUsu[0]}, ${nombreUsu[1]} ${joi} ${estado}` ;
    }

    return nombreConn;
}

let nombreUsu = ['Ada', 'Grace', 'Marie', ];
let estado = 'están conectad@s';
let chatStatus = obtenerChatStatus(nombreUsu, estado);
console.log(chatStatus);