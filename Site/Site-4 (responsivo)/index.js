const express = require("express");
const serv = express();
const bodyParser = require("body-parser");
const path = require("path");


const dados = require('./Site/scripts/csvjson.json');
const bd = require("./data-base/db");
const rotas = require("./rotas/rotas")

serv.use(bodyParser.urlencoded());

serv.use("/Obras", express.static(path.join(__dirname, "Site")));



serv.listen(3000, () => console.log("Server rodando"));

// console.log(dados[1].Percentual_executado);
