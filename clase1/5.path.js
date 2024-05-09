const path = require('node:path')

console.log(path.sep) // -> /mac || \win

const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename('/tmp/secreto/pass.txt')
console.log(base)

const filename = path.basename('/tmp/secreto/pass.txt', '.txt')
console.log(filename)

const extension = path.extname('/tmp/secreto/pass.txt')
console.log(extension)
