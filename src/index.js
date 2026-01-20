const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("CI/CD to Kubernetes is working!");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});

module.exports = server;