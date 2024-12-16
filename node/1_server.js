const http = require("http");

const host = "localhost";
// 127.0.0.1 loop back
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<h1>Hello World</h1>");
});

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});