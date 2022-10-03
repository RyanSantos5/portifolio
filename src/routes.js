import React from 'react';
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import home from './pages/home';
import OdsPage from './pages/odsPage';
import ongsPage from './pages/ongsPage';
import ProjectPage from './pages/project';
import WeatherPage from './pages/WeatherPage';



const Routes = () => (
    <BrowserRouter>
            {/* <Route path='/' component={Header} /> */}
        <Switch>
            <Route exact path='/portifolio/' component={home} />
            <Route exact path='/portifolio/weather' component={WeatherPage} />
            <Route exact path='/portifolio/ongs' component={ongsPage} />
            <Route exact path='/portifolio/ods/:key' component={OdsPage} />
            <Route exact path='/portifolio/project' component={ProjectPage} />
        </Switch>
    </BrowserRouter>
)

export default Routes;