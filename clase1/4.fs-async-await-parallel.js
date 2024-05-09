const { readFile } = require('node:fs/promises')
// IIFE - Inmediatly Invoked Function Expression

Promise.all([
  readFile('./archivo1.txt', 'utf-8'),
  readFile('./archivo2.txt', 'utf-8')
]).then(([text, secondText]) => {
  console.log('Primer texto:', text)
  console.log('Segundo texto:', secondText)
})
