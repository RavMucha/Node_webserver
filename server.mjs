// const express = require("express");
import express from "express";
import PocketBase from "pocketbase";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pb = new PocketBase("http://127.0.0.1:8090");
const app = express();

const port = 1987;

app.use(express.static(path.join(__dirname, "/src-web")));
app.use(express.json());
app.use((req, res) => {
  res.status(400);
  res.sendFile(path.join(__dirname, "/src-web/404.html"));
});
app.listen(port, (err) => {
  if (err) {
    console.log(`Operation ended with an error: ${err}`);
  } else {
    console.log(`Application listening  on port ${port}`);
  }
});

app.post("/api/:data", (req, res) => {
  const { data } = req.params;
  if (res.status(200)) {
    console.log(req.body);
  }
});

app.get("/api", (req, res) => {
  if (res.status(200)) {
    res.sendFile(path.join(__dirname, "/src-web/Form_received.html"));
  } else {
    res.sendFile(path.join(__dirname, "/src-web/Form_err.html"));
  }
});
