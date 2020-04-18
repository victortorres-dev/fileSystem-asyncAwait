const fs = require('fs')

const urlFile = 'src/files/toDeleteWrite.txt'

function unlinkPromificado (data) {
  return new Promise((resolve, reject) => {
    fs.unlink(data, error => {
      error
        ? reject(error)
        : resolve(data)
    })
  })
}

async function principal () {
  const archivoEliminado = await unlinkPromificado(urlFile)
  return archivoEliminado
}

principal()
  .then((result) => {
    console.log('El archivo ha sido eliminado: ', result)
  }).catch((err) => {
    console.log('Falló al eliminar el archivo: ', err)
  })
