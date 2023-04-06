import { Metrics } from "../metrics/metrics";
import { ServerTime } from "../server-time";
import styles from "./app.module.css";

export const App = () => {
  return (
    <main>
      <h1>Connex One Interview Test</h1>
      <div className={styles["split"]}>
        <ServerTime />
        <Metrics />
      </div>
    </main>
  );
};
