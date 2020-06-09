//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./to-do/to-do');

let comando = argv._[0];

switch (comando) {
  case 'crear':
    let tarea = porHacer.crear(argv.descripcion);
    console.log('Se ha guardado la tarea:');
    console.log(tarea.descripcion);
    break;
  case 'listar':
    let listado = porHacer.getListado();

    console.log('=====Por Hacer====='.green);
    for (let tarea of listado) {
      console.log('----------------'.blue);
      console.log(tarea.descripcion);
      console.log('Estado: ', tarea.completado ? 'Completado'.green : 'Sin hacer'.red );
      // console.log('Estado: ', tarea.completado);
    }
    console.log('==================='.green);
    break;
  case 'actualizar':
    let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
    console.log(actualizado ? 'Se ha marcado la tarea como completado': 'No se encontró la tarea');
    break;
  case 'borrar': 
    let borrado = porHacer.borrar(argv.descripcion);
    console.log(borrado ? 'Se ha borrado la tarea satisfactoriamente' : 'No se encontró la tarea');
    break;
  default: 
    console.log('Comando no es reconocido');
}