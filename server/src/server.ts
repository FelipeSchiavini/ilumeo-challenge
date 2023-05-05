import express from "express"
import { useExpressServer } from "routing-controllers";
import { Config } from "./config";

const ServerInitialize = async() => {
  const server = express()

  server.use(express.json())

  useExpressServer(server, {
    controllers: [],
  });

  return server.listen(Config.API_PORT, () => console.log(`Listening on port ${Config.API_PORT}`));
}

ServerInitialize();