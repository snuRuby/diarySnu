import { CircularProgress } from '@material-ui/core';
import React, { lazy, Suspense } from 'react';

import { Route, Switch } from 'react-router';

const Main = lazy(() => import('./pages/Main'));
const Item = lazy(() => import('./pages/Item'));

const App = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Switch>
        <Route path="/:movieId" component={Item} />
        <Route exact component={Main} />
      </Switch>
    </Suspense>
  );
}

export default App;
