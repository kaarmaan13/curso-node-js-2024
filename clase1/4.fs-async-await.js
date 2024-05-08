const { readFile } = require('node:fs/promises')

// IIFE - Inmediatly Invoked Function Expression
;(
  async () => {
    console.log('Leyendo primer archivo...')

    readFile('./archivo1.txt', 'utf-8')
      .then(text => {
        console.log('Primer texto:', text)
      })


    console.log('ANTES ----> Hacer cosas mientras lee el archivo...')

    console.log('Leyendo segundo archivo...')

    readFile('./archivo2.txt', 'utf-8')
      .then(secondText => {
        console.log('Segundo texto:', secondText)
      })
  }
)()