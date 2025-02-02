const http = require('http');

const server = http.createServer((req, res) =>
{
    // req = mean requesting info
    // res = mean responding to info
    if (req.url === '/') {
        res.end('Welcome to our home page')
      } else if (req.url === '/about') {
        res.end('Here is our short history')
      } else {
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `)
      }
});

// 5000 is the hostname, the port
server.listen(5000);

