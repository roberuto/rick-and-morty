import React from "react";
import { useParams } from "react-router-dom";

import { useEpisode } from '../hooks'

export const EpisodeDetails = () => {
  const { id } = useParams<{id: string}>();
  const { data, isLoading, isError } = useEpisode(id)
 
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error!</p>;
  }

  return (
    <div>
      <p>Episode - {data?.episode}</p>
      <p>Name: {data?.name}</p>
      <p>Air date: {data?.air_date}</p>
      <br />
    </div>
  );
}