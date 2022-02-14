import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import injectContext from './store/appContext';
import AppContext from './store/appContext';
import Home from './views/Home';
import NotFound from './views/NotFound';


const Main = () => {
    return (
        <>
            {/* <AppContext> */}
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route
                        exact
                        path={"/"}
                        component={Home}
                    />
                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
            </BrowserRouter>
            {/* </AppContext> */}
        </>
    )
}

export default injectContext(Main);