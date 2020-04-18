const fs = require('fs')

const urlFile = 'src/directories'
const nameFile = 'newDir'

function mkdirPromificado (data) {
  return new Promise((resolve, reject) => {
    fs.mkdir(`${urlFile}/${data}`, error => {
      error
        ? reject(error)
        : resolve(data)
    })
  })
}

async function principal () {
  const directorioCreado = await mkdirPromificado(nameFile)
  return directorioCreado
}

principal()
  .then((result) => {
    console.log('Se creó el directorio', result)
  }).catch((err) => {
    console.log('Falló al crear el archivo', err)
  })
