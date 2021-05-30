import { ApiClient } from "context/client/ClientContext";

import { CharacterPayload, CharactersPayload } from "./types";

export const fetchCharacters = (params: string) => async (client: ApiClient) => {
  const { data } = await client.get(`/character${params}`);
  return data as CharactersPayload;
};

export const fetchCharacter = (id: string) => async (client: ApiClient) => {
  const { data } = await client.get(`/character/${id}`);
  return data as CharacterPayload;
};
