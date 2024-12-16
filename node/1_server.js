const http = require("http");
const url = require("url");

const host = "localhost";
// 127.0.0.1 loop back
const port = 3000;

const server = http.createServer((req, res) => {
    const path = url.parse(req.url).pathname;

    if (path === "/") {
        res.writeHead(200, { "content-type": "text/html" });
        res.end("<h1>Home!</h1>");
    } else if (path === "/post") {
        res.writeHead(200, { "content-type": "text/html" });
        res.end("<h1>Post!</h1>");
    } else {
        res.writeHead(404, { "content-type": "text/html" });
        res.end("<h1>404!</h1>");
    }
});

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});
