import React from "react";
import { Link } from "react-router-dom";

import { Routes } from "router/routes";
import { Pagination } from "components/pagination/Pagination";
import { useCharacters } from "../hooks";

export const CharactersList = () => {
  const { data, isLoading, isError } = useCharacters();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error!</p>;
  }

  return (
    <div>
      <p>Characters</p>
      {data?.results.map((character) => {
        return (
          <article key={character.id}>
            <Link to={`${Routes.characters}/${character.id}`}>
              <span>{character.name}</span>
            </Link>
          </article>
        );
      })}
      {data?.info && <Pagination info={data.info} />}
    </div>
  );
};
