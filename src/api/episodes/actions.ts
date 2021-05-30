import { ApiClient } from "context/client/ClientContext";

import type { EpisodePayload, EpisodesPayload } from "./types";

export const fetchEpisodes = (params: string) => async (client: ApiClient) => {
  const { data } = await client.get(`/episode${params}`);
  return data as EpisodesPayload;
};

export const fetchEpisode = (id: string) => async (client: ApiClient) => {
  const { data } = await client.get(`/episode/${id}`);
  return data as EpisodePayload;
};
