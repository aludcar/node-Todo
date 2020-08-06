const opts = {
        descripcion: {
            alias: 'd',
            demand: true,
            desc: 'Descripcion de la tarea'
        }
    }
    // alfinal se pone el argv para regresar ese objeto del yargs
const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', opts)
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion: opts.descripcion,
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marca como completado o pendiente la tarea'
        }
    })
    .command('borrar', 'Borra un elemento del json Todo', opts)
    .help()
    .argv

/** Export Module */
module.exports = {
    argv
}