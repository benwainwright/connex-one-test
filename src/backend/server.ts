import express from "express";
import { LISTEN_PORT, TIME_PATH } from "../core/constants";
import { timeHandler } from "./handlers/time";
import { authorise } from "./middleware/auth";
import { metricsHandler } from "./middleware/prometheus";

const app = express();

app.use(authorise);
app.use(metricsHandler);
app.get(TIME_PATH, timeHandler);

app.listen(LISTEN_PORT, () => {
  console.log(`Listening on port ${LISTEN_PORT}`);
});
