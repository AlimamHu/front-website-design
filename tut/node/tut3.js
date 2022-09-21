// block excution code synchrone type
// line wise line


// node use asyncrone excution the was 
// all line wise code also excute but when you get data say you may run of or callback
const fs =require('fs');
let files= fs.readFile('readme.txt','utf-8',(eror,data)=>{
    console.log(eror,data)
})
console.log(files)
console.log('song')
