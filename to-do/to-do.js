// Aquí está toda la lógica
const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
  let data = JSON.stringify(listadoPorHacer);
  fs.writeFile('db/data.json', data, (err) => {
    if (err) throw new Error('No se pudo grabar');
  })
}

const cargarDB = () => {
  try {
    listadoPorHacer = require('../db/data.json');
  } catch (error) {
    listadoPorHacer = [];
  }
}

const crear = (descripcion) => {
  cargarDB();
  let porHacer = {
    descripcion,
    completado: false,  // Lo dejo falso por default porque no tiene sentido crear tareas que ya están hechas
  };
  listadoPorHacer.push(porHacer);
  guardarDB();
  return porHacer;
}

const getListado = () => {
  cargarDB();
  return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
  cargarDB();
  let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
  if (index >= 0) {
    listadoPorHacer[index].completado = completado;
    guardarDB();
    return true;
  } else {
    return false;
  }
}

const borrar = (descripcion) => {
  cargarDB();
  let index = listadoPorHacer.findIndex(tarea => {
    console.log(tarea.descripcion);
    console.log(descripcion);
    return tarea.descripcion === descripcion
  });
  if (index >= 0) {
    listadoPorHacer.splice(index, 1);
    guardarDB();
    return true;
  } else {
    return false;
  }
}

module.exports = {
  crear,
  getListado,
  actualizar,
  borrar
}

