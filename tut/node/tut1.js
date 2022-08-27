const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
//   set file type html
res.setHeader('Content-Type', 'text/html');
// inside `` we write multily string

// normal code
// res.end("hello alimam ")
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>dropdown|  2</title>
      <style>
          .container{
              position: relative;
              display: inline-block;
              /* border: 2px solid red; */
             
          }
          h2{
              display: inline-block;
              /* background-color: rgb(212, 209, 209); */
          }
          hr{
              border-top: 1px solid rgb(116, 116, 116);
          }
          .dropdown{
  text-align: center;
              display: none;
            
              position: absolute;
              box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2) inset;
              background-color: rgb(179, 179, 179);
      top: 50px;
      width: 120px;
     
          }
          .container:hover .dropdown{
              display: block;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <h2>mr .Song</h2>
          <div class="dropdown">
              <h3>hello ali,</h3>
              <p>song</p>
              <hr>
              <p><strong>pwoer</strong></p>
          </div>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// repl -> read exl print and loop again
// _ is use last exceuted variables
// > a=923
// 923
// > b=93
// 93
// > _
// 93
