const fs = require('node:fs/promises')

console.log('Leyendo primer archivo...')

fs.readFile('./archivo1.txt', 'utf-8')
  .then( text => { 
    console.log('Primer texto:', text)
  })


console.log('ANTES ----> Hacer cosas mientras lee el archivo...')

console.log('Leyendo segundo archivo...')

fs.readFile('./archivo2.txt', 'utf-8')
  .then( secondText => { 
    console.log('Segundo texto:', secondText)
  })

// CUANDO NO TENGA PROMESAS NATIVAS NODE.PROMISIFY

// const fs = require('node:fs')
// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)