import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import router from "../route";
import logger from "../middlewares/logger";

const run = async () => {
  const app = express();
  const port = 8080;
  app.use(cookieParser("miraexpress.ckp"));
  const corsop = {
    origin: "*",
    methods: "GET,POST",
  };
  app.use(logger);
  app.use(cors(corsop));
  app.use(bodyParser.json({ limit: "50mb" }));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(router);
  app.listen(port, () => {
    console.log(`Server: ${port} is listning`);
  });
};

try {
  run();
} catch (err) {
  console.log("error! :", err);
}
