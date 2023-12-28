// const express = require("express");
import express from "express";
import PocketBase from "pocketbase";
import path from "path";
import { fileURLToPath } from "url";
import axios from "axios";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pb = new PocketBase("http://127.0.0.1:8090");
const authData = await pb.admins
  .authWithPassword("admin@agh.edu.pl", "admin@agh.edu.pl")
  .then((response) => console.log(response));
const app = express();
const port = 1987;
app.use(express.json());

app.use(express.static(path.join(__dirname, "src-web")));
app.post("/api/msg", async (request, response) => {
  axios.post(
    "http://127.0.0.1:8090/api/collections/Messages/records",
    request.body
  );
  response.json({ status: "ok" });
});
app.post("/api/bugs", async (request, response) => {
  axios.post(
    "http://127.0.0.1:8090/api/collections/Bugs/records",
    request.body
  );
  response.json({ status: "ok" });
});

app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + "/src-web/404.html");
});

app.listen(port, (err) => {
  if (err) {
    console.log(`Operation ended with an error: ${err}`);
  } else {
    console.log(`Application listening  on port ${port}`);
  }
});
