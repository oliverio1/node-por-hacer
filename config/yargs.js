const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        }
    })
    .command('actualizar', 'Modifica el estado de la tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        },
        completado: {
            alias: 'c',
            default: true,
            desc: 'Modifica el estado de la tarea por hacer'
        }
    })
    .command('borrar', 'Elimina la tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}