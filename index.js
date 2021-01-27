var generateImage = require('random-image-creator');

console.log(generateImage(280,400));

const http = require("http")
const server = http.createServer((request, response) => {
response.writeHead(200, {'Content-Type': 'text/html'});
response.end("<img src="+generateImage(280,400)+">");
})
server.listen(3000,() => console.log("server has started"))