import { useQuery } from "hooks/useQuery";
import { fetchEpisodes, fetchEpisode } from "api/episodes/actions";
import { useParams } from "hooks/useParams";

const defaultParams = {
  page: 1,
};

export const useEpisodes = () => {
  const { stringifiedParams } = useParams(defaultParams);
  const { data, isError, isLoading } = useQuery(["fetchEpisodes", stringifiedParams], fetchEpisodes(stringifiedParams));

  return { data, isError, isLoading };
};

export const useEpisode = (id: string) => {
  const { data, isError, isLoading } = useQuery(`fetchEpisode-${id}`, fetchEpisode(id));

  return { data, isError, isLoading };
};
