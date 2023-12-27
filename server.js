const express = require("express");
// import { createServer } from "http";
// import { readFile } from "fs";

const app = express();
const path = require("path");
const port = 3000;

app.use(express.static(path.join(__dirname, "/src-web")));
app.use(express.json());
app.use((req, res) => {
  res.status(400);
  res.sendFile(path.join(__dirname, "/src-web/404.html"));
});
app.listen(port, () => {
  console.log(`App listening  on port ${port}`);
});

app.post("/api/:data", (req, res) => {
  const { data } = req.params;
  if (res.status(200)) {
    console.log(req.body);
  }
});

// app.get("/api", (req, res) => {
//   if (res.status(200)) {
//     res.sendFile(path.join(__dirname, "/src-web/Form_received.html"));
//   } else {
//     res.sendFile(path.join(__dirname, "/src-web/Form_err.html"));
//   }
// });
// const port = process.env.PORT || 3000;
// const server = createServer(function (req, res) {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   readFile("index.html", function (err, data) {
//     if (err) {
//       res.writeHead(404);
//       res.write("File not found. :-(");
//     } else {
//       res.write(data);
//     }
//     res.end();
//   });
// });
// server.listen(port, function (err) {
//   if (err) {
//     console.error("Operation ended with an error:", err);
//   } else {
//     console.log("Sucesfully listening on port: " + port);
//   }
// });