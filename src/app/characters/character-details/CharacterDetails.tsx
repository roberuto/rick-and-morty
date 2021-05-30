import React from "react";
import { useParams } from "react-router-dom";

import { useCharacter } from '../hooks'

export const CharacterDetails = () => {
  const { id } = useParams<{id: string}>();
  const { data, isLoading, isError } = useCharacter(id)
 
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error!</p>;
  }

  return (
    <div>
      <p>Character</p>
      <p>Name: {data?.name}</p>
      <p>Species: {data?.species}</p>
      <p>Status: {data?.status}</p>
      <br />
    </div>
  );
}