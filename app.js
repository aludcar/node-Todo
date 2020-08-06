const argv = require('./config/yargs').argv;
const color = require('colors');
const { crear, getListado, actualizar, borrar } = require('./todo/todo');

// seleccion de comandos
let comando = argv._[0];
switch (comando) {
    case 'crear':
        console.log(crear(argv.descripcion));
        break;
    case 'listar':
        let listado = getListado();
        for (let tarea of listado) {
            console.log(color.green('============= Por Hacer ============'));
            console.log(color.red(tarea.description));
            console.log(color.red(`Estado: ${tarea.completado}`));
            console.log(color.green('===================================='));
        }
        break;
    case 'actualizar':
        console.log(actualizar(argv.descripcion, argv.completado));
        break;
    case 'borrar':
        console.log(borrar(argv.descripcion));
        break;
    default:
        console.log('nada');
        break;
}