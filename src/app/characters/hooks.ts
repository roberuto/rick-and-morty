import { useQuery } from "hooks/useQuery";
import { fetchCharacters, fetchCharacter } from "api/characters/actions";
import { useParams } from "hooks/useParams";

const defaultParams = {
  page: 1,
};

export const useCharacters = () => {
  const { stringifiedParams } = useParams(defaultParams);
  const { data, isError, isLoading } = useQuery(
    ["fetchCharacters", stringifiedParams],
    fetchCharacters(stringifiedParams)
  );

  return { data, isError, isLoading };
};

export const useCharacter = (id: string) => {
  const { data, isError, isLoading } = useQuery(`fetchCharacter-${id}`, fetchCharacter(id));

  return { data, isError, isLoading };
};
