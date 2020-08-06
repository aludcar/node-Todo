/** Requires Region */
const fs = require('fs');

/** Properties Region */
let listadoTodo = [];
const pathFile = './db/data.json';
/** Functions Region */
const crear = (description) => {
    let todo = {
        description,
        completado: false
    }
    readDB();
    listadoTodo.push(todo);
    guardarDB();

    return todo;
}

const guardarDB = () => {
    let dataJs = JSON.stringify(listadoTodo);
    fs.writeFile(pathFile, dataJs, (err) => {
        if (err) throw new Error('No se pudo grabar');
    });
}

const readDB = () => {
    try {
        listadoTodo = require('../db/data.json');
    } catch (error) {
        listadoTodo = [];
    }
}

const getListado = () => {
    readDB();
    return listadoTodo;
}

const actualizar = (description, completado) => {
    let index = getIndex(description);
    if (index < 0) {
        throw new Error('No se encontro ninguna tarea asociada a esa Descripcion');
    } else {
        listadoTodo[index].completado = completado;
        guardarDB();
        return true;
    }
}
const borrar = (description) => {
    let index = getIndex(description);
    if (index < 0) {
        throw new Error('No se encontro ninguna tarea asociada a esa Descripcion');
    } else {
        listadoTodo.splice(index, 1);
        guardarDB();
        return true;
    }
}

const getIndex = (description) => {
        readDB();
        return listadoTodo.findIndex(tarea => tarea.description === description);
    }
    /** Export Region */
module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}