import React from 'react';
import {
    BrowserRouter, Switch, Route,
} from 'react-router-dom';

import DashboardContainer from './containers/dashboard-container';
import routes from './configs/routes';

const App = () => {
    const makeRoutes = () => routes.map((item) => {
        const { component: Component, path, isDefault } = item;

        if (isDefault) {
            return (
                <Route
                    key="default"
                    render={() => (
                        <DashboardContainer>
                            <Component />
                        </DashboardContainer>
                    )}
                />
            );
        }

        return (
            <Route
                key={path}
                exact
                path={path}
                render={() => (
                    <DashboardContainer>
                        <Component />
                    </DashboardContainer>
                )}
            />
        );
    });

    return (
        <>
            <BrowserRouter>
                <Switch>
                    {makeRoutes()}
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;