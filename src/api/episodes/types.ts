export type Episode = {
  id: string;
  name: string;
  episode: string;
  air_date: string;
  characters: string[];
  created: string;
  url: string;
};

export type EpisodePayload = Episode;

export type EpisodesPayload = {
  info: {
    count: number;
    next: string | null;
    pages: number;
    prev: string | null;
  };
  results: Episode[];
};
