const http = require("http");
const app = require('./app');

const server = http.createServer(app);

// Set port and start server listening
const port = 3000;
server.listen(port);


//display in console the listened Port and the url of the / page.
server.addListener('listening', () =>{
    console.log(`start listening on port ${port}...`);
    console.log(`App : http://localhost:${port}`);
})

//display in console the REQ METHOD and the URL
server.addListener("request", (req) => {
    console.log(`${req.method} ${req.url}`);
  });