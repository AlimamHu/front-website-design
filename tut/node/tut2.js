const fs =require('fs');
console.log('read file')
let files= fs.readFileSync('readme.txt','utf-8')
console.log(files)

console.log('next line...')
// tables replease to bad
text=files.replace(/Table/g,'NIGHT BAD ->')
console.log(text)

// CREATE FILE

console.log('File is Creating...')
fs.writeFileSync('night bad.txt',text)
