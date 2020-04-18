const fs = require('fs')

const urlFile = 'src/files/write.txt'
const format = 'utf8'

function readFilePromificado (data) {
  return new Promise((resolve, reject) => {
    fs.readFile(data, format, (error, data) => {
      error
        ? reject(error)
        : resolve(data)
    })
  })
}

async function principal () {
  const archivoLeido = await readFilePromificado(urlFile)
  return archivoLeido
}

principal()
  .then((result) => {
    console.log('El archivo contiene:', result)
  }).catch((err) => {
    console.log('Falló la lectura del archivo', err)
  })
