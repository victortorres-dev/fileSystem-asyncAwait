const fs = require('fs')

const urlFile = 'src/files/write.txt'
const newCadena = '\n Una nueva linea de texto 158'
const format = 'utf8'

function appendFilePromificado (data) {
  return new Promise((resolve, reject) => {
    fs.appendFile(urlFile, data, format, (error) => {
      error
        ? reject(error)
        : resolve(data)
    })
  })
}

async function principal () {
  const contenidoEscrito = await appendFilePromificado(newCadena)
  return contenidoEscrito
}

principal()
  .then(resultado => {
    console.log('Contenido agregado al archivo!!, resultado: ', resultado)
  })
  .catch(error => console.log('ERROR Al INSERTAR CONTENIDO!!!: ', error))
