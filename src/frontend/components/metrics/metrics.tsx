import { API_URL } from "../../../core/constants";
import { useRequest } from "../../hooks/use-request";

export const Metrics = () => {
  const response = useRequest<string>(`${API_URL}/metrics`, 30);

  console.log(response);

  if (response.loading) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <code>{response.data}</code>
    </div>
  );
};
