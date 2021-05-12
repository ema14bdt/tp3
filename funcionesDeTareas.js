const fs = require('fs');
const tareas = JSON.parse(fs.readFileSync('./tareas.json', 'utf-8'));

const funcionesDeTareas = {
    listar: function () {
        tareas.forEach(function (tarea,i) {
            console.log(`La tarea  Nro. ${i+1}: ${tarea.titulo}, se encuentra: ${tarea.estado}.`)
        });
    },
    escribirJSON: function (tareas) {
        fs.writeFileSync('./tareas.json', JSON.stringify(tareas, null, 2), 'utf-8');
    },
    guardarTarea: function (titulo, estado = 'pendiente') {
        let nuevaTarea = {
            titulo,
            estado
        }
        tareas.push(nuevaTarea);
        this.escribirJSON(tareas);
        this.listar();
    },
    filtrarPorEstado: function(filtro){
        let leerPorEstado = tareas.filter(tarea => tarea.titulo.includes(filtro) || tarea.estado.includes(filtro));
        console.log(leerPorEstado);
    }
}

module.exports = funcionesDeTareas;
