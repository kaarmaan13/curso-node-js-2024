const fs = require('node:fs')

console.log('Leyendo primer archivo...');
fs.readFile('./archivo1.txt', 'utf-8', (err, text) => { 
  console.log('Primer texto:', text)
})


console.log('ANTES ----> Hacer cosas mientras lee el archivo...')

console.log('Leyendo segundo archivo...')

fs.readFile('./archivo2.txt', 'utf-8', (err, secondText) => { 
  console.log('Segundo texto:', secondText)
})