import React from "react";
import { Link } from "react-router-dom";

import { Routes } from "router/routes";
import { Pagination } from "components/pagination/Pagination";
import { useEpisodes } from "../hooks";

export const EpisodesList = () => {
  const { data, isLoading, isError } = useEpisodes();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error!</p>;
  }

  return (
    <div>
      <p>Episodes</p>
      {data?.results?.map((episode) => (
        <article key={episode.id}>
          <Link to={`${Routes.episodes}/${episode.id}`}>
            <span>
              {episode.episode} - {episode.name} <em>{episode.air_date}</em>
            </span>
          </Link>
        </article>
      ))}
      {data?.info && <Pagination info={data.info} />}
    </div>
  );
};
