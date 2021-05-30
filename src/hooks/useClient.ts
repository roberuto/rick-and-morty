import { useContext } from "react";

import { ClientContext } from "context/client/ClientContext";

export const useClient = () => {
  const client = useContext(ClientContext);

  if (!client) {
    throw Error("Client Provider not available");
  }

  return client;
};
