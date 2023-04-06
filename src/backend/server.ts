import express from "express";
import { LISTEN_PORT, TIME_PATH } from "../core/constants";
import { timeHandler } from "./handlers/time";
import { authorise } from "./middleware/auth";
import { metricsHandler } from "./middleware/prometheus";
import cors from "cors";

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(authorise);
app.use(metricsHandler);
app.get(TIME_PATH, timeHandler);

app.listen(LISTEN_PORT, () => {
  console.log(`Listening on port ${LISTEN_PORT}`);
});
