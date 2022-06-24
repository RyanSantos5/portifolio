import React from 'react';
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import Main from './pages/home';
import Category from './pages/category';
import Header from './components/Header';


const Routes = () => (
    <BrowserRouter>
            {/* <Route path='/' component={Header} /> */}
        <Switch>
            <Route exact path='/portifolio' component={Main} />
        </Switch>
    </BrowserRouter>
)

export default Routes;