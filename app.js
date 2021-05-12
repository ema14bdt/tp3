const process = require('process');
const {listar, guardarTarea, filtrarPorEstado} = require('./funcionesDeTareas');

switch (process.argv[2]) {
    case 'listar':
        console.log('Listado de tareas:');
        listar();
        break;
    case 'crear':
        guardarTarea(process.argv[3], process.argv[4]);
        break;
    case 'filtrar':
        filtrarPorEstado(process.argv[3]);
        break;
    case undefined:
        console.log('Atención - Tienes que pasar una acción.');
        break;
    default:
        console.log('No entiendo qué quieres hacer.');
        break;
}

