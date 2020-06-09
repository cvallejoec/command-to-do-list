const descripcion = {
  demand: true, // Esto hace que este flag sea obligatorio
  alias: 'd',
  desc: 'Descripción de la tarea por hacer',
};

const completado = {
  default: true,
  alias: 'c',
  desc: 'Marca como completado o pendiente la tarea',
};

const argv = require('yargs')
              .command('crear', 'Crear un elemento por hacer', {
                descripcion
              })
              .command('actualizar', 'Actualiza el estado completado de una tarea', {
                descripcion,
                completado,
              })
              .command('borrar', 'Borra una tarea', {
                descripcion,
              })
              .help() // Me permite imprimir una ayuda en caso de que no se sepan los comandos
              .argv;  // Retornamos el argv

module.exports = {
  argv,
}