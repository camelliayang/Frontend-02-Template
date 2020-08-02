//自己写了一段。。。不work
/*const http = require('http');

http.createServer((request, response) => {
  const { headers, method, url } = request;
  let body = [];
  request.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk.toString());
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    response.on('error', (err) => {
      console.error(err);
    });
    response.setHeader('Content-Type', 'text/html');
    response.setHeader('X-Foo', 'bar');
    response.writeHead(200, {'Content-Type': 'text/plain'});
    const responseBody = { headers, method, url, body };
    response.end(JSON.stringify(responseBody))
  });
}).listen(8088); */

//以下是老师的：
const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request received')
    console.log(req.headers)
    res.setHeader('Content-Type', 'text/html')
    res.setHeader('X-Foo', 'bar')
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(
`
<html>
    <head></head>
    <body>
    <div style="color: blue">hello world</div>
</body>
</html>
`        
    )
})
server.listen(9000);
console.log('server started');