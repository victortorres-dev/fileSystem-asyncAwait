const fs = require('fs')

const urlFile = 'src/directories'
const nameFile = 'todelete'

function rmdirPromificado (data) {
  return new Promise((resolve, reject) => {
    fs.rmdir(`${urlFile}/${data}`, error => {
      error
        ? reject(error)
        : resolve(data)
    })
  })
}

async function principal () {
  const directorioEliminado = await rmdirPromificado(nameFile)
  return directorioEliminado
}

principal()
  .then((result) => {
    console.log('Directorio eliminado: ', result)
  }).catch((err) => {
    console.log('Falló al eliminar el directorio', err)
  })
