import { Switch, Route, useRouteMatch } from "react-router-dom";

import { EpisodesList } from "./episodes-list/EpisodesList";
import { EpisodeDetails } from "./episode-details/EpisodeDetails";

export const EpisodesRoutes = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <EpisodesList />
      </Route>
      <Route exact path={`${path}/:id`}>
        <EpisodeDetails />
      </Route>
    </Switch>
  );
};
