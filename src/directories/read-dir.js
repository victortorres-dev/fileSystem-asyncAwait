const fs = require('fs')

const urlFile = 'src/files'

function readdirPromificado (data) {
  return new Promise((resolve, reject) => {
    fs.readdir(data, (error, data) => {
      error
        ? reject(error)
        : resolve(data)
    })
  })
}

async function principal () {
  const directorioLeido = await readdirPromificado(urlFile)
  return directorioLeido
}

principal()
  .then((result) => {
    console.log('El directorio contiene', result)
  }).catch((err) => {
    console.log('Falló al leer el directorio', err)
  })
