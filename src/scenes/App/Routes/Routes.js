import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from 'routes/routes';

const home = () => (
    <h1>Change me in scenes/App/Routes/Routes</h1>
)

const Routes = () => (
    <Switch>
        <Route path={routes.Home} component={home} exact />
    </Switch>
);

export default Routes;
