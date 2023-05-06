import express from "express"
var cors = require('cors');
import { useExpressServer } from "routing-controllers";
import { Config } from "./config";
import { Controllers } from "./app/controllers";

const ServerInitialize = async() => {
  const server = express()
  server.use(cors())

  server.use(express.json())

  useExpressServer(server, {
    controllers: Controllers,
    //classTransformer: true,
  });

  return server.listen(Config.API_PORT, () => console.log(`Listening on port ${Config.API_PORT}`));
}

ServerInitialize();