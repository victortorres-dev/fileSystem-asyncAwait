const fs = require('fs')

const urlFile = 'src/files/write.txt'
const urlDestination = 'src/files/destinationWrite.txt'

function copyFilePromificado (data, callback) {
  return new Promise((resolve, reject) => {
    fs.copyFile(urlFile, data, error => {
      error
        ? reject(error)
        : resolve(data)
    })
  })
}

async function principal () {
  const contenidoCopiado = await copyFilePromificado(urlDestination)
  return contenidoCopiado
}

principal()
  .then(resultado => {
    console.log('El contenido ha sido copiado desde: ', resultado)
  })
  .catch(error => console.log('Falló al copiar el contenido', error))
