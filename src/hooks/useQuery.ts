import { useQuery as useBaseQuery } from "react-query";

import { ApiClient } from "context/client/ClientContext";
import { useClient } from "./useClient";

export type Key = string | string[];
export type Action<T> = (client: ApiClient) => Promise<T>;

export const useQuery = <T>(key: Key, action: Action<T>) => {
  const client = useClient();

  return useBaseQuery(key, () => action(client));
};
