import { useEffect, useState } from "react";
import { API_KEY } from "../../core/secrets";

interface UseRequestLoadedReturnValue<T> {
  data: T;
  loading: false;
}

interface UseRequesLoadingReturnValue {
  loading: true;
}

type UseRequestReturnValue<T> =
  | UseRequesLoadingReturnValue
  | UseRequestLoadedReturnValue<T>;

const getData = async <T>(response: Response): Promise<T> => {
  const data = await response.text();
  try {
    return JSON.parse(data);
  } catch {
    return data as T;
  }
};

export const useRequest = <T>(
  path: string,
  refreshTime: number
): UseRequestReturnValue<T> => {
  const [response, setResponse] = useState<UseRequestReturnValue<T>>({
    loading: true,
  });

  const loadData = async () => {
    setResponse({ loading: true });
    const response = await fetch(path, {
      credentials: "include",
      headers: {
        "content-type": "application/json",
        authorization: API_KEY,
      },
    });
    setResponse({ loading: false, data: await getData(response) });
  };

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 1000 * refreshTime);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return response;
};
