const http = require("http");
const fs = require("fs");

//const index = fs.readFileSync("index.html", "utf-8");

const data = fs.readFileSync("data.json", "utf-8");


const server = http.createServer((req, res) => {

  res.setHeader("Content-type", "application/json");
  console.log("server started")
  res.end(data);

}); server.listen(8080)