import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import { EpisodesRoutes } from './app/episodes/routes'
import { CharactersRoutes } from './app/characters/routes'
import { Routes } from './router/routes'

export const App = () => {
  return (
    <div>
      <nav>
        <Link to={Routes.home}>Home</Link>
        <span> | </span>
        <Link to={Routes.episodes}>Episodes</Link>
        <span> | </span>
        <Link to={Routes.characters}>Characters</Link>
      </nav>
      <main>
        <Switch>
          <Route path={Routes.episodes}>
            <EpisodesRoutes />
          </Route>
          <Route path={Routes.characters}>
            <CharactersRoutes />
          </Route>
          <Route path={Routes.home}>
            <div><p>Home</p></div>
          </Route>
        </Switch>
      </main>
    </div>
  );
};
