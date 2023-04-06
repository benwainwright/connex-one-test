import { useEffect, useState } from "react";
import { API_URL } from "../../../core/constants";
import { getTimeInSeconds } from "../../../core/get-time-in-seconds";
import { TimeResponse } from "../../../types/time-response";
import { useRequest } from "../../hooks/use-request";
import { getStopwatchTime } from "./get-stopwatch-time";

export const ServerTime = () => {
  const response = useRequest<TimeResponse>(`${API_URL}/time`, 30);
  const [now, setNow] = useState(getTimeInSeconds());

  useEffect(() => {
    const interval = setInterval(() => setNow(getTimeInSeconds()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (response.loading) {
    return <p>Loading</p>;
  }

  const {
    data: { epoch },
  } = response;

  return (
    <div>
      <ul>
        <li>{epoch} seconds </li>
        <li>{getStopwatchTime(now - epoch)} seconds </li>
      </ul>
    </div>
  );
};
