import { Switch, Route, useRouteMatch } from "react-router-dom";

import { CharactersList } from "./characters-list/CharactersList";
import { CharacterDetails } from './character-details/CharacterDetails'

export const CharactersRoutes = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <CharactersList />
      </Route>
      <Route exact path={`${path}/:id`}>
        <CharacterDetails />
      </Route>
    </Switch>
  );
};

