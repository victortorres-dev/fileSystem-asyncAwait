const fs = require('fs')

const urlFile = 'src/files/write.txt'
const newCadena = 'Una nueva linea de texto write'
const format = 'utf8'

function writeFilePromificado (data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(urlFile, data, format, error => {
      error
        ? reject(error)
        : resolve(data)
    })
  })
}

async function principal () {
  const contenidoInsertado = await writeFilePromificado(newCadena)
  return contenidoInsertado
}

principal()
  .then((result) => {
    console.log('Contenido insertado:', result)
  }).catch((err) => {
    console.log('Falló al insertar contenido', err)
  })
